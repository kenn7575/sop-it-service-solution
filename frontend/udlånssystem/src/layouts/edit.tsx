import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Combobox } from '@components/Combobox';
import FormEditPanel from '@components/form-edit-panel';
import TextQuestion from '@components/textQuestion';

import { deleteItem, getData, updateItem } from '@data/index.js';
import { autoGenZodSchema } from '@services/autoGen';
import doesObjectsMatch from '@services/doesObjectsMatch.js';
import { getPrevPage } from '@services/pathFormatter';

import { toast } from 'sonner';
import type { z } from 'zod';

const defaultFields: Field[] = [{ label: 'Navn', binding: 'name' }];

interface EditLayoutProps {
  table: string;
  fields?: Field[];
  zodSchema?: z.ZodObject<any>;
  editPanelSlot?: React.ReactElement;
  formSlot?: React.ReactElement;
}

export default function EditLayout({
  table,
  fields = defaultFields,
  zodSchema = autoGenZodSchema(fields),
  editPanelSlot = <></>,
  formSlot = <></>,
}: EditLayoutProps) {
  const { id } = useParams();
  const UUID = Number(id!);

  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);

  const [importData, setImportData] = useState<any>();
  const [exportData, setExportData] = useState<any>();

  const [fields2, setFields] = useState(fields);

  async function fetchSelectOptions() {
    for (let field of fields) {
      if (field.type == 'select') {
        if (typeof field.options != 'string') continue;

        field.options = await getData<any>(field.options);
        setFields((prev) => [...prev]);
      }
    }

    setFields(fields);
  }

  // $: fetchSelectOptions(), fields;

  useEffect(() => {
    importDataFromDB();
  }, []);

  useEffect(() => {
    fetchSelectOptions();
  }, [fields2]);

  async function importDataFromDB() {
    const data = await getData<any>(table, { UUID });

    if (!data?.UUID) {
      toast.error('Kunne ikke finde data');
      navigate(getPrevPage());
      return;
    }

    setExportData({ ...data });
    setImportData({ ...data });

    fetchSelectOptions();
  }

  function handleReset() {
    setExportData({ ...importData });
    setEditMode(false);
  }

  function isDeleteDisabled(): boolean {
    if (!importData?._count) return false;

    const { _count } = importData as { _count: { [key: string]: number } };

    for (let value of Object.values(_count)) {
      if (value > 0) return true;
    }

    return false;
  }

  async function handleUpdate(): Promise<void> {
    if (doesObjectsMatch(importData, exportData)) {
      setEditMode(false);
      return;
    }

    const { data, error } = zodSchema.safeParse(exportData);

    if (error) {
      error.errors.reverse().map((e) =>
        toast.warning(e.message, {
          id: e.code + '-' + e.path.join('-'),
        }),
      );
      return;
    }

    toast.promise(updateItem(table, UUID, data), {
      loading: 'Gemmer...',
      success: () => {
        importDataFromDB();
        setEditMode(false);
        return 'Gemt';
      },
      error: (err: any) => {
        console.log(err);
        return 'Der opstod en fejl';
      },
    });
  }

  async function handleDelete() {
    const name = importData?.name || '#' + UUID;

    toast(`Sikker på du vil slette "${name}"?`, {
      id: 'promptDelete',
      position: 'top-center',
      action: {
        label: 'Slet',
        onClick: () => {
          toast.promise(deleteItem(table, UUID), {
            loading: 'Sletter...',
            success: () => {
              navigate(getPrevPage());
              return 'Slettet';
            },
            error: (err: any) => {
              return 'Fejl: ' + err?.response?.data?.error;
            },
          });
        },
      },
      cancel: {
        label: 'Annuller',
        onClick: () => toast.dismiss('promptDelete'),
      },
    });
  }

  if (!importData) return <div>Loading...</div>;

  return (
    <div className="box-border flex h-full gap-4 p-8">
      <FormEditPanel
        handleReset={handleReset}
        handleCancel={() => {
          navigate(getPrevPage());
        }}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        editMode={editMode}
        setEditMode={setEditMode}
        disableDelete={isDeleteDisabled()}
      >
        {editPanelSlot}
      </FormEditPanel>
      <div
        onSubmit={(e) => {
          e.preventDefault;
          handleUpdate();
        }}
        className="form"
      >
        <form id="edit-form">
          {fields2.map((field, i) => {
            let option = { UUID: 0, name: '' };

            if (field.options && typeof field.options != 'string') {
              const findOption = field.options.find(
                ({ UUID }) => UUID == exportData[field.binding],
              );

              if (findOption) option = findOption;
            }
            if (field.type == 'text' || field.type == 'number')
              return (
                <TextQuestion
                  key={i}
                  value={exportData[field.binding] || undefined}
                  setValue={(value) =>
                    setExportData((prev: any) => {
                      prev[field.binding] = value;
                      return { ...prev };
                    })
                  }
                  editMode={editMode}
                  label={field.label}
                  required={field.required}
                  type={field.type}
                  disabled={field.disabled}
                />
              );

            if (field.type == 'select' && typeof field.options == 'object')
              return (
                <Combobox
                  key={i}
                  setValue={(value) =>
                    setExportData((prev: any) => {
                      prev[field.binding] = value.UUID;
                      return prev;
                    })
                  }
                  label={field.label}
                  options={field?.options}
                  match={{ ...option }}
                  editMode={editMode}
                  popoverWidth="43.75rem"
                />
              );
          })}
          {formSlot}
        </form>
      </div>
    </div>
  );
}
