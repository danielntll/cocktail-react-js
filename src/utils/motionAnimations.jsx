import { useLocation } from "react-router-dom";


export const pageAnimation = () => {
  const ANIMATION_SPEED = 0.2;

  const location = useLocation();
  const direction = location.state?.dir;

  console.log("ANIMATION direction : ", location);

  switch (direction) {
    case "back":
      console.log("BACK animation");
      return (
        {
          initial: {
            x: '-100vw'
          },
          final: {
            x: '0vw',
            transition: { duration: ANIMATION_SPEED }
          }
        }
      );
    case "forward":
      console.log("forward animation");
      return (
        {
          initial: {
            x: '100vw'
          },
          final: {
            x: '0vw',
            transition: { duration: ANIMATION_SPEED }
          }
        }
      );

    case "open":
      console.log("open animation");
      return (
        {
          initial: {
            y: '100vw'
          },
          final: {
            y: '0vw',
            transition: { duration: ANIMATION_SPEED }
          }
        }
      );

    default:
      console.log("DEFAULT animation");
      return (
        {
          initial: {
            x: '0vw'
          },
          final: {
            x: '0vw',
            transition: { duration: ANIMATION_SPEED }
          }
        }
      );
  }
}