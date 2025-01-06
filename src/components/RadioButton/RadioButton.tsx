import './RadioButton.scss';

interface RadioButtonProps {
  value: string;
  label: string;
  description: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  label,
  description,
  checked,
  onChange,
}) => {
  return (
    <div className="radio-button">
      <input
        id={value}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="radio-button__labels-container" htmlFor={value}>
        <span className="radio-button__label heading-2">{label}</span>
        <span className="radio-button__description body-2">{description}</span>
      </label>
    </div>
  );
};

export default RadioButton;
