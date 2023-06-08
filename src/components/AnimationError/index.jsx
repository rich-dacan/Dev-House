import React from 'react'
import Lottie from 'react-lottie';
import { useState } from "react";
import animationError from "../../animations/error.json";


function AnimationError() {

    const [animationState] = useState({
        isStopped: false,
        isPaused: false,
      });
    
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationError,
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

export default AnimationError