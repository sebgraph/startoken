/* import { useState } from 'react';

interface UseStepperProps {
  initialStep: number;
  totalSteps: number;
}

const useStepper = ({ initialStep, totalSteps }: UseStepperProps) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [showStepper, setShowStepper] = useState(false);

  const handleStartClick = () => {
    setShowStepper(true);
    setCurrentStep(1); // Move to Step 1 (assuming step 1 is the first functional step)
  };

  const handleStepChange = (step: number) => {
    if (step >= 0 && step <= totalSteps) {
      setCurrentStep(step); // Update the current step if it's within range
    }
  };

  const handleResetClick = () => {
    setShowStepper(false);
    setCurrentStep(0); // Reset to the welcome screen (Step 0)
  };

  return {
    currentStep,
    showStepper,
    handleStartClick,
    handleStepChange,
    handleResetClick,
  };
};

export default useStepper;
 */
