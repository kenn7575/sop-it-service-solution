import '@styles/controlPanel.css';

export default function FormEditPanel({
  editMode = false,
  setEditMode = (value: any) => {},
  disableDelete = false,
  handleReset = () => {},
  handleUpdate = () => {},
  handleDelete = () => {},
  handleCancel = () => {},
  editPanelSlot = <></>,
  formSlot = <></>,
  children = <></>,
}) {
  return (
    <div className="control-panel">
      <div className="buttons">
        {editMode ? (
          <>
            <button disabled={!editMode} onClick={handleReset}>
              Annuller
            </button>
            <button onClick={handleUpdate}>Gem</button>
          </>
        ) : (
          <>
            <button onClick={handleCancel}>Tilbage</button>
            <button
              onClick={() => {
                setEditMode(!editMode);
              }}
            >
              Rediger
            </button>
          </>
        )}
      </div>
      {editMode && (
        <button
          className="text-[#f85a40dd] text-white"
          onClick={handleDelete}
          disabled={disableDelete}
        >
          Slet
        </button>
      )}
      {children}
    </div>
  );
}
