import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import plane from "./assets/plane.png";
import "./App.scss";
import HomePage from "./components/HomePage";
import CountriesStore from "./store/CountriesStore";

const App = () => {
  const particlesInit = useCallback(async engine => {
 
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  
  const store = new CountriesStore();
 useEffect(()=>{
  console.log("!!!!");
  return ()=>{console.log("@@@");
    
  }
 },[])

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
          fpsLimit:50,
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
                quantity:0,
              },


            },
          },
          particles: {
            shape: {
              type: "circle",
              image: [
                {
                  src: plane,
                  height:5,
                  width:5,
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
              speed:0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value:0.2,
            },
            // shape: {
            //     type: "circle",
            // },
            size: {
              value: { min: 2, max: 5 },
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