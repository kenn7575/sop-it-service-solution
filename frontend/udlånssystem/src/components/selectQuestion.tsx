import { useEffect } from 'react';

interface SelectQuestionProps {
  editMode?: boolean;
  label: string;
  setValue?: (value: any) => void;
  match?: { UUID: number };
  options?: { UUID: number; name: string }[];
}

export default function SelectQuestion({
  editMode = true,
  label,
  setValue = () => {},
  match = { UUID: 1 },
  options = [{ UUID: 1, name: '' }],
}: SelectQuestionProps) {
  useEffect(() => {
    if (options.length <= 0) return;

    setValue(options[0].UUID);
  }, [options]);

  return (
    <div className="question">
      <label htmlFor="a10">
        {label}
        {editMode && <span className="required-tag">*</span>}
      </label>
      <select
        disabled={!editMode}
        id="a10"
        required
        form="user-form"
        className="!py-0"
        onChange={(e) => {
          setValue(JSON.parse(e.target.value));
        }}
        defaultValue={JSON.stringify(match.UUID)}
      >
        {options.map((option, i) => (
          <option key={i} value={JSON.stringify(option.UUID)}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
