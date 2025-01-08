import React from 'react';
import StepButton from './StepButton';
import StepIndicator from './StepIndicator';
import { BeakerIcon } from '@heroicons/react/24/solid';
import './Stepper.scss';

interface StepperProps {
  currentStep: number;
  handleStepChange: (stepIndex: number) => void;
  getStepState: (stepIndex: number) => 'current' | 'visited' | 'disabled';
  isButtonDisabled: (stepIndex: number) => boolean;
}

const Stepper: React.FC<StepperProps> = ({
  currentStep,
  handleStepChange,
  getStepState,
  isButtonDisabled,
}) => {
  return (
    <div className="stepper-container">
      {/* Step 1 */}
      <StepButton
        label="Project Size"
        state={getStepState(1)} // Use getStepState function
        onClick={() => handleStepChange(1)}
        icon={<BeakerIcon />}
        disabled={isButtonDisabled(0)}
      />
      <StepIndicator isActive={currentStep >= 2} />

      {/* Step 2 */}
      <StepButton
        label="Token Types"
        state={getStepState(2)} // Use getStepState function
        onClick={() => handleStepChange(2)}
        icon={<BeakerIcon />}
        disabled={isButtonDisabled(1)}
      />
      <StepIndicator isActive={currentStep >= 3} />

      {/* Step 3 */}
      <StepButton
        label="Generate the Template"
        state={getStepState(3)} // Use getStepState function
        onClick={() => handleStepChange(3)}
        icon={<BeakerIcon />}
        disabled={isButtonDisabled(2)}
      />
    </div>
  );
};

export default Stepper;
