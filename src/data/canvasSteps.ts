export interface CanvasStepData {
  title: string;
  description: string;
  buttonText: string;
  type: string;
  options?: string[];
  selected: string[];
  isButtonDisabled: boolean;
}

const canvasSteps: CanvasStepData[] = [
  {
    title: 'Welcome to the Canvas!',
    description: 'Get started by clicking the button below.',
    buttonText: 'Start',
    type: 'default',
    selected: [],
    isButtonDisabled: false,
  },
  {
    title: 'Step 1: Explore Features',
    description: 'Learn about our amazing features.',
    buttonText: 'Next',
    type: 'radio',
    options: ['Feature A', 'Feature B', 'Feature C'],
    selected: [],
    isButtonDisabled: false,
  },
  {
    title: 'Step 2: Customize Settings',
    description: 'Adjust settings to suit your preferences.',
    buttonText: 'Next',
    type: 'checkbox',
    options: ['Setting X', 'Setting Y', 'Setting Z'],
    selected: [],
    isButtonDisabled: false,
  },
  {
    title: 'Step 3: Finalize Project',
    description: 'Provide additional details and select export format.',
    buttonText: 'Final',
    type: 'final',
    options: ['JSON', 'YAML', 'XML'],
    selected: [],
    isButtonDisabled: false,
  },
];

export default canvasSteps;
