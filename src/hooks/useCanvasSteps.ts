import { useState, useEffect } from 'react';
import canvasSteps from '../data/canvasSteps';

const useCanvasSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<{ [key: number]: string[] }>({});
  const [projectInfo, setProjectInfo] = useState('');
  const [exportFormat, setExportFormat] = useState(''); // State for export format
  const [isButtonActive, setIsButtonActive] = useState(false); // Track if button is active

  const handleNext = () => {
    setCurrentStep(prevStep =>
      prevStep < canvasSteps.length - 1 ? prevStep + 1 : prevStep
    );
  };

  const handlePrevious = () => {
    setCurrentStep(prevStep => (prevStep > 0 ? prevStep - 1 : 0));
  };

  const updateSelections = (selected: string[]) => {
    const step = canvasSteps[currentStep]; // Get the current step's type
    if (step.type === 'radio') {
      if (currentStep === canvasSteps.length - 1) {
        // Update export format if it's the final step
        setExportFormat(selected[0]);
        console.log('Export format updated:', selected[0]);
      } else {
        // Update selections for other radio steps
        setSelections(prev => ({
          ...prev,
          [currentStep]: selected,
        }));
      }
    } else if (step.type === 'checkbox') {
      setSelections(prev => ({
        ...prev,
        [currentStep]: selected,
      })); // Update selections for checkbox step
    }
  };

  const updateProjectInfo = (text: string) => {
    setProjectInfo(text);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelections({});
    setProjectInfo('');
    setExportFormat('');
    setIsButtonActive(false);
  };

  // Handling button disabled state based on step type
  const isButtonDisabled = () => {
    const step = canvasSteps[currentStep];
    if (step.type === 'checkbox') {
      return !selections[currentStep]?.length; // Button is disabled if no checkboxes are selected
    }
    if (step.type === 'radio') {
      return selections[currentStep]?.length !== 1; // Must select one option
    }
    if (step.type === 'final') {
      return !projectInfo || !exportFormat; // Must provide both project info and export format
    }
    return false;
  };

  // Use useEffect to update the button active state based on selections, projectInfo, exportFormat
  useEffect(() => {
    const step = canvasSteps[currentStep];
    if (step.type === 'checkbox') {
      // The button is active if selections are made
      setIsButtonActive(selections[currentStep]?.length > 0);
    } else if (step.type === 'radio') {
      setIsButtonActive(selections[currentStep]?.length === 1); // Button is active if one option is selected
    } else if (step.type === 'final') {
      // The button is active if both projectInfo and exportFormat are provided
      setIsButtonActive(Boolean(projectInfo && exportFormat));
    }
  }, [currentStep, selections, projectInfo, exportFormat]); // Dependencies: update when these change

  return {
    currentStep,
    selections,
    projectInfo,
    exportFormat,
    handleNext,
    handlePrevious,
    updateSelections,
    updateProjectInfo,
    handleRestart,
    isButtonDisabled,
    isButtonActive, // Pass the button state
  };
};

export default useCanvasSteps;
