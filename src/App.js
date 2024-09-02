import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import plane from "./assets/plane.png";
import "./App.scss";
import HomePage from "./components/HomePage";
import CountriesStore from "./store/CountriesStore";
const App = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  
  const store = new CountriesStore();

  return ( 

    <>
   
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color:
              "rgb(11,41,57)"

          },
          fpsLimit: 50,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: ""
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },

            },
          },
          particles: {
            shape: {
              type: "images",
              image: [
                {
                  src: plane,
                  height: 50,
                  width: 50,
                }]
            },
            links: {
              color: "#7695FF",
              distance: 150,
              enable: true,
              opacity: 0,
              width: 1.5,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1500,
              },
              value: 80,
            },
            opacity: {
              value: 1,
            },
            // shape: {
            //     type: "circle",
            // },
            size: {
              value: { min: 20, max: 20 },
            },
          },
          detectRetina: true,
        }}
      />

      <HomePage CountriesStore={store} />

    </>

  );
};

export default App;