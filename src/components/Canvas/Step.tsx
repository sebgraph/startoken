//import React, { useEffect } from 'react';
import './Canvas.scss';
import { CanvasStepData } from '../../data/canvasSteps';
import RadioButton from '../RadioButton/RadioButton';
import Checkbox from '../Checkbox/Checkbox';

export interface StepProps extends CanvasStepData {
  currentStep: number;
  projectInfo: string;
  exportFormat: string;
  onUpdateSelections: (selected: string[]) => void;
  onUpdateProjectInfo: (text: string) => void;
  onNext: () => void;
  //onPrevious?: () => void;
  onRestart: () => void;
  isButtonDisabled: boolean;
  isButtonActive: boolean;
}

const Step: React.FC<StepProps> = ({
  title,
  description,
  buttonText,
  type,
  options = [],
  selected,
  isButtonDisabled,
  isButtonActive,
  onUpdateSelections,
  onUpdateProjectInfo,
  onNext,
  //onPrevious,
  onRestart,
  currentStep,
  projectInfo,
  exportFormat,
}) => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSelection = [e.target.value];
    onUpdateSelections(newSelection);

    // Automatically proceed to the next step when a radio option is selected in Step 1
    if (currentStep === 1) {
      setTimeout(() => {
        onNext();
      }, 300); // Add a small delay for better UX
    }
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    option: string
  ) => {
    const updatedSelections = [...selected];
    if (e.target.checked) {
      updatedSelections.push(option);
    } else {
      const index = updatedSelections.indexOf(option);
      if (index > -1) updatedSelections.splice(index, 1);
    }
    onUpdateSelections(updatedSelections);
  };

  return (
    <section className="canvas-container">
      <div className="container">
        <h2 className="display-2">{title}</h2>
        <p className="body-2">{description}</p>

        {type === 'radio' &&
          options.map(option => (
            <RadioButton
              key={option.value}
              value={option.value}
              label={option.value}
              description={option.description}
              checked={selected.includes(option.value)}
              onChange={handleRadioChange}
            />
          ))}

        {type === 'checkbox' &&
          options.map(option => (
            <Checkbox
              key={option.value}
              value={option.value}
              label={option.value}
              checked={selected.includes(option.value)}
              onChange={e => handleCheckboxChange(e, option.value)}
            />
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

            <div>
              <span className="radio-group-label">Export Format:</span>
              {options?.map(option => (
                <RadioButton
                  key={option.value}
                  value={option.value}
                  label={option.value}
                  description={option.description}
                  checked={exportFormat === option.value}
                  onChange={() => onUpdateSelections([option.value])}
                />
              ))}
            </div>
          </div>
        )}

        {/* Conditionally render Next button */}
        {currentStep !== 1 && (
          <button
            onClick={onNext}
            disabled={isButtonDisabled}
            className={isButtonActive ? 'active' : ''}
          >
            {buttonText}
          </button>
        )}

        {/* Restart Button */}
        {currentStep > 0 && <button onClick={onRestart}>Restart</button>}
      </div>
    </section>
  );
};

export default Step;
