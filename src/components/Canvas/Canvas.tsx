import './Canvas.scss';
import Step from './Step';
import canvasSteps, { CanvasStepData } from '../../data/canvasSteps';
import useCanvasSteps from '../../hooks/useCanvasSteps';
import Stepper from '../Stepper/Stepper';

const Canvas: React.FC = () => {
  const {
    currentStep,
    handleStepChange,
    selections,
    projectInfo,
    exportFormat,
    handleNextStep,
    getStepState,
    updateSelections,
    updateProjectInfo,
    isButtonDisabled,
    isStepButtonDisabled,
    handleRestart,
  } = useCanvasSteps();

  const currentStepData: CanvasStepData | undefined = canvasSteps[currentStep];

  if (!currentStepData) {
    return <div>Error: Step data not found.</div>;
  }

  return (
    <section className="canvas container" aria-label="Canvas Workflow">
      {/* Render Stepper Navigation */}
      {currentStep !== 0 && (
        <nav className="canvas__stepper" aria-label="Stepper Navigation">
          <Stepper
            currentStep={currentStep}
            handleStepChange={handleStepChange}
            getStepState={getStepState}
            isButtonDisabled={isButtonDisabled}
          />
        </nav>
      )}

      {/* Render Current Step */}
      <article className="canvas__step">
        <Step
          {...currentStepData}
          selected={selections[currentStep] || []}
          projectInfo={projectInfo}
          exportFormat={exportFormat}
          onUpdateSelections={updateSelections}
          onUpdateProjectInfo={updateProjectInfo}
          onNext={handleNextStep}
          onRestart={handleRestart}
          isButtonDisabled={isStepButtonDisabled()} // Step-specific logic
          currentStep={currentStep}
          isButtonActive={currentStep !== canvasSteps.length - 1}
        />
      </article>
    </section>
  );
};

export default Canvas;
