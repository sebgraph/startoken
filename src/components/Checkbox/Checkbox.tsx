import './Checkbox.scss';

interface CheckboxProps {
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  value,
  label,
  checked,
  onChange,
}) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
