import { useState, useCallback } from 'react';
import canvasSteps from '../data/canvasSteps';

const useCanvasSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<{ [key: number]: string[] }>({});
  const [projectInfo, setProjectInfo] = useState('');
  const [exportFormat, setExportFormat] = useState('');
  const [visitedSteps, setVisitedSteps] = useState(new Set<number>());

  const markStepAsVisited = (stepIndex: number) => {
    setVisitedSteps(prev => new Set([...prev, stepIndex]));
  };

  const handleNextStep = () => {
    if (currentStep < canvasSteps.length - 1) {
      markStepAsVisited(currentStep + 1);
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleStepChange = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < canvasSteps.length) {
      setCurrentStep(stepIndex);
      markStepAsVisited(stepIndex);
    }
  };

  const updateSelections = (selected: string[]) => {
    setSelections(prev => ({
      ...prev,
      [currentStep]: selected,
    }));
    if (canvasSteps[currentStep]?.type === 'final') {
      setExportFormat(selected[0]);
    }
  };

  const updateProjectInfo = (text: string) => setProjectInfo(text);

  const isStepValid = useCallback(() => {
    const step = canvasSteps[currentStep];
    if (step?.type === 'checkbox') return selections[currentStep]?.length > 0;
    if (step?.type === 'radio') return selections[currentStep]?.length === 1;
    if (step?.type === 'final')
      return projectInfo.trim() && exportFormat.trim();
    return true;
  }, [currentStep, selections, projectInfo, exportFormat]);

  const getStepState = useCallback(
    (stepIndex: number) => {
      if (stepIndex === currentStep) return 'current';
      if (visitedSteps.has(stepIndex)) return 'visited';
      return 'disabled';
    },
    [currentStep, visitedSteps]
  );

  //For Step
  const isStepButtonDisabled = () => {
    const step = canvasSteps[currentStep];

    if (step.type === 'checkbox') {
      return !selections[currentStep]?.length; // Disable if no checkbox selected
    }
    if (step.type === 'radio') {
      return selections[currentStep]?.length !== 1; // Disable if no radio option selected
    }
    if (step.type === 'final') {
      return !projectInfo.trim() || !exportFormat.trim(); // Both fields are required
    }
    return false;
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelections({});
    setProjectInfo('');
    setExportFormat('');
    setVisitedSteps(new Set([0]));
  };

  return {
    currentStep,
    handleNextStep,
    handlePreviousStep,
    handleStepChange,
    getStepState,
    selections,
    projectInfo,
    exportFormat,
    updateSelections,
    updateProjectInfo,
    handleRestart,
    isButtonDisabled: () => !isStepValid(),
    isStepButtonDisabled,
  };
};

export default useCanvasSteps;
