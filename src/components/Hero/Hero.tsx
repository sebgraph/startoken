import './Hero.scss';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

export const Hero = () => {
  const { RiveComponent } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: 'starttoken-hero.riv',
    // Be sure to specify the correct state machine (or animation) name
    stateMachines: 'State Machine 1',
    // This is optional.Provides additional layout control.
    layout: new Layout({
      fit: Fit.Contain, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return (
    <section className="hero">
      <div className="container hero__container">
        <h1 className="display-1 hero__headline text-center">
          Unblock the names for your tokens
        </h1>
        <div className="hero__rive-container">
          <RiveComponent />
        </div>
      </div>
    </section>
  );
};
