import React from 'react'
import Lottie from 'react-lottie';
import { useState } from "react";
import animationComp from "../../animations/computer.json";


function AnimationComputer() {

    const [animationState] = useState({
        isStopped: false,
        isPaused: false,
      });
    
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationComp,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
    }

    return (
        <Lottie
      options={defaultOptions}
      isStopped={animationState.isStopped}
      isPaused={animationState.isPaused}
    />
    )

}

export default AnimationComputer