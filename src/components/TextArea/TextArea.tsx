import './TextArea.scss';

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={`textarea ${className || ''}`}>
      <label className="textarea__label">{label}</label>
      <textarea value={value} onChange={onChange} className="textarea__box" />
    </div>
  );
};

export default TextArea;
