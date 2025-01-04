import { useState } from 'react';
import canvasSteps from '../data/canvasSteps';

const useCanvasSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<{ [key: number]: string[] }>({});
  const [projectInfo, setProjectInfo] = useState('');
  const [exportFormat, setExportFormat] = useState('');

  // Move to the next step or restart at the beginning
  const handleNext = () => {
    setCurrentStep(prevStep =>
      prevStep < canvasSteps.length - 1 ? prevStep + 1 : 0
    );
  };

  // Update selections (for radio or checkbox options)
  const updateSelections = (selected: string[]) => {
    setSelections(prev => ({ ...prev, [currentStep]: selected }));

    // If the current step is 'final', update specific fields
    if (currentStep === canvasSteps.length - 1) {
      // Ensure radio option is selected (final step, update export format)
      if (selected.length === 1) {
        setExportFormat(selected[0]);
      }
    }
  };

  // Handle text area input (for project info)
  const updateProjectInfo = (text: string) => {
    setProjectInfo(text);
  };

  // Restart the process
  const handleRestart = () => {
    setCurrentStep(0);
    setSelections({});
    setProjectInfo('');
    setExportFormat('');
  };

  // Check if the button should be disabled
  const isButtonDisabled = () => {
    const step = canvasSteps[currentStep];
    if (step.type === 'radio') {
      // Ensure that only one radio button is selected for the 'radio' type
      return !(selections[currentStep]?.length === 1);
    }
    if (step.type === 'checkbox') {
      // Ensure at least one checkbox is selected for the 'checkbox' type
      return selections[currentStep]?.length === 0;
    }
    if (step.type === 'final') {
      // Ensure that both project info and export format are filled for the final step
      return !projectInfo || !exportFormat;
    }
    return false;
  };

  return {
    currentStep,
    selections,
    projectInfo,
    exportFormat,
    handleNext,
    updateSelections,
    updateProjectInfo,
    handleRestart,
    isButtonDisabled,
  };
};

export default useCanvasSteps;
