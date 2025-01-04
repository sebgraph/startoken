import React from 'react';
import './Canvas.scss';
import { CanvasStepData } from '../../data/canvasSteps';

/* export interface StepProps {
  title: string;
  description: string;
  buttonText: string;
  type: string;
  options?: string[];
  selected: string[];
  projectInfo: string;
  exportFormat: string;
  onUpdateSelections: (selected: string[]) => void;
  onUpdateProjectInfo: (text: string) => void;
  onNext: () => void;
  onRestart: () => void;
  isButtonDisabled: () => boolean;
} */

export interface StepProps extends CanvasStepData {
  projectInfo: string; // This stays here
  exportFormat: string;
  onUpdateSelections: (selected: string[]) => void;
  onUpdateProjectInfo: (text: string) => void;
  onNext: () => void;
  onRestart: () => void;
  isButtonDisabled: boolean;
}

const Step: React.FC<StepProps> = ({
  title,
  description,
  buttonText,
  type,
  options = [],
  selected,
  isButtonDisabled,
  onUpdateSelections,
  onUpdateProjectInfo,
  onNext,
  onRestart,
  projectInfo,
  exportFormat,
}) => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateSelections([e.target.value]);
  };

  return (
    <section className="canvas-container">
      <div className="container">
        <h2 className="display-2">{title}</h2>
        <p className="body-2">{description}</p>
        {type === 'radio' &&
          options.map(option => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={selected.includes(option)}
                onChange={handleRadioChange}
              />
              {option}
            </label>
          ))}
        {type === 'checkbox' &&
          options.map(option => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                checked={selected.includes(option)}
                onChange={e => {
                  const updatedSelections = [...selected];
                  if (e.target.checked) {
                    updatedSelections.push(option);
                  } else {
                    const index = updatedSelections.indexOf(option);
                    if (index > -1) updatedSelections.splice(index, 1);
                  }
                  onUpdateSelections(updatedSelections);
                }}
              />
              {option}
            </label>
          ))}
        {type === 'final' && (
          <div>
            <label>
              Project Info:
              <textarea
                value={projectInfo}
                onChange={e => onUpdateProjectInfo(e.target.value)}
              />
            </label>
            <label>
              Export Format:
              <input
                type="radio"
                value="JSON"
                checked={exportFormat === 'JSON'}
                onChange={() => onUpdateSelections(['JSON'])}
              />
              JSON
              <input
                type="radio"
                value="YAML"
                checked={exportFormat === 'YAML'}
                onChange={() => onUpdateSelections(['YAML'])}
              />
              YAML
              <input
                type="radio"
                value="XML"
                checked={exportFormat === 'XML'}
                onChange={() => onUpdateSelections(['XML'])}
              />
              XML
            </label>
          </div>
        )}
        <button onClick={onNext} disabled={isButtonDisabled}>
          {buttonText}
        </button>
        <button onClick={onRestart}>Restart</button>
      </div>
    </section>
  );
};

export default Step;
