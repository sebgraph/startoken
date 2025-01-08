import React from 'react';
import './StepButton.scss';

type StepButtonState = 'current' | 'visited' | 'disabled';

interface StepButtonProps {
  label: string;
  state: StepButtonState;
  onClick: () => void;
  icon: React.ReactNode;
  disabled?: boolean;
}

const StepButton: React.FC<StepButtonProps> = ({
  label,
  state,
  onClick,
  icon,
}) => {
  return (
    <button
      className={`step-button ${state}`} // Apply state-based CSS classes
      disabled={state === 'disabled'}
      onClick={() => {
        if (state === 'visited' || state === 'current') {
          onClick();
        }
      }}
    >
      <span className="step-button__text button-1">{label}</span>
      <span className="step-button__icon">{icon}</span>
    </button>
  );
};

export default StepButton;
