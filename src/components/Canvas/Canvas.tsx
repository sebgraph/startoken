import './Canvas.scss';
import Step from './Step';
import canvasSteps from '../../data/canvasSteps';
import { CanvasStepData } from '../../data/canvasSteps';
import useCanvasSteps from '../../hooks/useCanvasSteps';

const Canvas: React.FC = () => {
  const {
    currentStep,
    selections,
    projectInfo,
    exportFormat,
    handleNext,
    handlePrevious,
    updateSelections,
    updateProjectInfo,
    isButtonDisabled,
    isButtonActive,
    handleRestart,
  } = useCanvasSteps();

  const currentStepData: CanvasStepData = canvasSteps[currentStep];

  const handleStepChange = (direction: 'next' | 'previous') => {
    if (direction === 'next') {
      handleNext();
    } else if (direction === 'previous') {
      handlePrevious();
    }
  };

  return (
    <section>
      {/* Render Stepper Navigation (except on the first step) */}
      {currentStep !== 0 && (
        <div className="stepper">
          <button
            onClick={() => handleStepChange('previous')}
            disabled={currentStep === 1}
            className={currentStep === 1 ? 'active' : ''}
          >
            Project Size
          </button>
          <button
            onClick={() => handleStepChange('next')}
            disabled={currentStep === 2}
            className={currentStep === 2 ? 'active' : ''}
          >
            Token Types
          </button>
          <button
            onClick={() => handleStepChange('next')}
            disabled={currentStep === 3}
            className={currentStep === 3 ? 'active' : ''}
          >
            Generate the Template
          </button>
        </div>
      )}

      {/* Render Current Step */}
      <Step
        {...currentStepData}
        selected={selections[currentStep] || []}
        projectInfo={projectInfo}
        exportFormat={exportFormat}
        onUpdateSelections={updateSelections}
        onUpdateProjectInfo={updateProjectInfo}
        onNext={handleNext}
        //onPrevious={handlePrevious}
        onRestart={handleRestart}
        isButtonDisabled={isButtonDisabled()}
        isButtonActive={isButtonActive}
        currentStep={currentStep} // Pass currentStep to Step
      />
    </section>
  );
};

export default Canvas;
