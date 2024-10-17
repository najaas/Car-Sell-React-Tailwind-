 import React, { useEffect } from "react";
import Banner from "./Banner";
import Card from "../../Components/User/Card";
import Card1 from "../../Components/User/Card1";
import Note from "./Note";
import AOS from "aos";
import "./aos/dist/aos.css";
// import './node_modules/aos/dist/aos.css';


const Home = () => {

    useEffect(() => {
        AOS.init({
          startEvent: "DOMContentLoaded",
          initClassName: "aos-init",
          animatedClassName: "aos-animate",
          useClassNames: false,
          disableMutationObserver: false,
          debounceDelay: 50,
          throttleDelay: 99,
          offset: 120,
          delay: 0,
          duration: 2500,
          easing: "linear",
          once: true,
          mirror: false,
          anchorPlacement: "top-bottom",
        });
      }, []);

  return (
    <>
    <div className="bg-black">
      <Banner/>
      <Card1/>
      <Note/>
      <Card/>
    </div>
    </>
  );
};

export default Home;
