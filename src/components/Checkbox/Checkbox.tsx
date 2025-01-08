import './Checkbox.scss';

interface CheckboxProps {
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  value,
  label,
  description,
  checked,
  onChange,
  className,
}) => {
  return (
    <label className={`checkbox ${className || ''}`}>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <div className="checkbox__labels-container">
        <span className="checkbox__label heading-2">{label}</span>
        <span className="checkbox__description body-2">{description}</span>
      </div>
    </label>
  );
};

export default Checkbox;
