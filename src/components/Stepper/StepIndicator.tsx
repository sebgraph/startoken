import './StepIndicator.scss';

interface StepIndicatorProps {
  isActive: boolean;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ isActive }) => {
  return (
    <span className={`step-indicator ${isActive ? 'active' : 'disabled'}`}>
      →
    </span>
  );
};

export default StepIndicator;
