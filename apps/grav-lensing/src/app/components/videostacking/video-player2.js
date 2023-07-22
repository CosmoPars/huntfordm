import React, { useCallback, useRef } from "react";
import PrimaryButton from "../buttons/primary-button";
import amplitude from 'amplitude-js';
import { useHistory } from "react-router-dom";
import { ClickSound } from "../../components/audio/sound"

const UseRefPlayer = () => {
  const videoRef1 = useRef();

  // const handlePlay = () => {
  //   videoRef1.current.play();
  // };


  const history = useHistory ()


  const handleNext = useCallback (() => {
      amplitude.getInstance().logEvent('Click on Stack Button',{'CurrentPage':'Stacked Galaxies 2'})
      history.push('/tutorial/stackedgalaxies3')
      ClickSound.play()
    }, [history])



  return (
    <>
      <div>
            <button 
              style={{
                  color: 'red', 
                  position: "fixed", 
                  top:'31%', 
                  left:'56%', 
                  zIndex:'10',
                  borderRadius: '3em',
                  height: '2.2rem',
                  width: '13rem',
                  fontSize: '1.5em',
                  display: 'flex',
                  flexDirection: 'row',
                  fontWeight: '600',
                  justifyContent: 'center',
                  color: 'black',
                  backgroundColor: '#FFFA',
                  visibility: "hidden",

                }} 
              onClick={handleNext}>
              Stack the Rest
            </button>
      <video id="myVideo" autoPlay playsInline ref={videoRef1} style={{ position: "fixed", top:'0', left:'0', width:'100%', height:'100vh', objectFit: "cover" }}>
          <source src="../../assets/video/Second.mp4" type="video/mp4" />    
      </video>
      </div>
    </>
  );
};

export default UseRefPlayer;