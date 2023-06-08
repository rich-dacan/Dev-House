

import React from 'react'
import Lottie from 'react-lottie';
import { useState } from "react";
import animationDev from "../../animations/dev1.json";
import Logo from "../../images/Logo.svg"
import { PageInitial } from './styles';
import Button from "../../components/Button";
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AnimatedPage from '../../components/AnimatedPage';


function Initial({authenticated}) {

    const [animationState] = useState({
        isStopped: false,
        isPaused: false,
      });
    
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDev,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
    }

    if (authenticated) {
    return <Redirect to="/home" />;
  }

  /**/
    return (
      <AnimatedPage>

      
        <PageInitial>
        <div className='logo'>
        <img src={Logo} alt="logo" />
          <h1>Gerencie seu portfólio de programação</h1>
          <Link to="/register">
          
        <Button>Começar</Button>
        </Link>
        </div>
        <div className='lottie'>
        <Lottie
      options={defaultOptions}
      isStopped={animationState.isStopped}
      isPaused={animationState.isPaused}
    />

        </div>
        
        
       
  </PageInitial>
  </AnimatedPage>
    )
}

export default Initial