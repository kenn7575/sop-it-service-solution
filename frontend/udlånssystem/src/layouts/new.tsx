import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormNewPanel from '@components/form-new-panel';
import SelectQuestion from '@components/selectQuestion';
import TextQuestion from '@components/textQuestion';

import createItem from '@data/create';
import getData from '@data/getData';
import { autoGenZodSchema } from '@services/autoGen';
import { getPrevPage } from '@services/pathFormatter';

import { toast } from 'sonner';
import type { z } from 'zod';

const defaultFields: Field[] = [{ label: 'Navn', binding: 'name' }];

interface NewLayoutProps {
  table: string;
  fields?: Field[];
  zodSchema?: z.ZodObject<any>;
}

export default function NewLayout({
  table,
  fields = defaultFields,
  zodSchema = autoGenZodSchema(fields),
}: NewLayoutProps) {
  const navigate = useNavigate();

  const [exportData, setExportData] = useState<any>({});
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

  async function handleCreate() {
    const { data, error } = zodSchema.safeParse(exportData);

    if (error) {
      error.errors.reverse().map((e) =>
        toast.warning(e.message, {
          id: e.code + '-' + e.path.join('-'),
        }),
      );

      return;
    }

    toast.promise(createItem(table, data), {
      loading: 'Gemmer...',
      success: ({ id }) => {
        console.log(id);
        if (!id) return 'Der opstod en fejl';
        navigate(`${getPrevPage()}/${id}`);
        return 'Gemt';
      },
      error: (err: any) => {
        console.log(err);
        return 'Der opstod en fejl';
      },
    });
  }

  useEffect(() => {
    fetchSelectOptions();
  }, []);

  return (
    <div className="box-border flex h-full gap-4 p-8">
      <FormNewPanel
        handleCancel={() => {
          navigate(getPrevPage());
        }}
        handleCreate={handleCreate}
      />

      <div className="form">
        <form id="new-form">
          {fields2.map((field, i) => {
            if (field.type == 'text' || field.type == 'number')
              return (
                <TextQuestion
                  key={i}
                  setValue={(value) =>
                    setExportData((prev: any) => {
                      prev[field.binding] = value;
                      return { ...prev };
                    })
                  }
                  value={exportData[field.binding]}
                  label={field.label}
                  required={field.required}
                  type={field.type}
                />
              );

            if (field.type == 'select' && typeof field.options == 'object')
              return (
                <SelectQuestion
                  key={i}
                  setValue={(value) =>
                    setExportData((prev: any) => {
                      prev[field.binding] = value;
                      return prev;
                    })
                  }
                  label={field.label}
                  options={field?.options}
                  match={{ UUID: exportData[field.binding] }}
                />
              );
          })}
        </form>
      </div>
    </div>
  );
}
