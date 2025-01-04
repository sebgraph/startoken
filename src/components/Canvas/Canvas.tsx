import './Canvas.scss';
import Step from './Step';
import useCanvasSteps from '../../hooks/useCanvasSteps';
import canvasSteps from '../../data/canvasSteps';
import { CanvasStepData } from '../../data/canvasSteps';

const Canvas: React.FC = () => {
  const {
    currentStep,
    selections,
    projectInfo,
    exportFormat,
    handleNext,
    updateSelections,
    updateProjectInfo,
    handleRestart,
    isButtonDisabled,
  } = useCanvasSteps();

  const currentStepData: CanvasStepData = canvasSteps[currentStep];

  return (
    <section>
      <Step
        {...currentStepData} // Spread the step data for the current step
        selected={selections[currentStep] || []} // Pass selected options for the current step
        projectInfo={projectInfo} // Pass projectInfo from the hook
        exportFormat={exportFormat} // Pass exportFormat from the hook
        onUpdateSelections={updateSelections} // Pass the updateSelections function to handle selection changes
        onUpdateProjectInfo={updateProjectInfo}
        onNext={handleNext} // Pass handleNext function to move to the next step
        onRestart={handleRestart} // Pass handleRestart function to reset everything
        isButtonDisabled={isButtonDisabled()} // Disable the button if needed based on current step
      />
    </section>
  );
};
export default Canvas;
