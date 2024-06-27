import React, { useEffect } from "react";
import Banner from "./Banner";
import Card from "../../components/card";
import Card1 from "../../components/card1";
import Note from "./note";
import AOS from "aos";
import "aos/dist/aos.css";

const home = () => {

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

export default home;
