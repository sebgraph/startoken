export interface CanvasStepData {
  title: string;
  description: string;
  buttonText: string;
  type: string;
  //options?: string[];
  options?: { value: string; description: string }[];
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
    options: [
      { value: 'Personal', description: 'For personal projects or prototypes' },
      { value: 'Small', description: 'For small-level systems' },
      { value: 'Medium', description: 'For medium-level systems' },
      { value: 'Large', description: 'For enterprise-level systems' },
    ],
    selected: [],
    isButtonDisabled: false,
  },
  {
    title: 'Step 2: Customize Settings',
    description: 'Adjust settings to suit your preferences.',
    buttonText: 'Next',
    type: 'checkbox',
    options: [
      { value: 'Setting X', description: 'Description of Setting X' },
      { value: 'Setting Y', description: 'Description of Setting Y' },
      { value: 'Setting Z', description: 'Description of Setting Z' },
    ],
    selected: [],
    isButtonDisabled: false,
  },
  {
    title: 'Step 3: Finalize Project',
    description: 'Provide additional details and select export format.',
    buttonText: 'Final',
    type: 'final',
    options: [
      { value: 'JSON', description: 'Export as JSON format' },
      { value: 'YAML', description: 'Export as YAML format' },
      { value: 'XML', description: 'Export as XML format' },
    ],
    selected: [],
    isButtonDisabled: false,
  },
];

export default canvasSteps;
