import React, { useCallback, useRef } from "react";
import PrimaryButton from "../buttons/primary-button";
import amplitude from 'amplitude-js';
import { useHistory } from "react-router-dom";
import { ClickSound } from "../../components/audio/sound"


const UseRefPlayer = () => {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

    const history = useHistory ()


    const handleNext = useCallback (() => {
        amplitude.getInstance().logEvent('Click on Stack Button',{'CurrentPage':'Stacked Galaxies 0'})
        history.push('/tutorial/stackedgalaxies1')
        ClickSound.play()
      }, [history])

  return (
    <>
      <div>
          
          {/* <div id="box" style={{visibility:"hidden"}}> */}
            <button 
              
              style={{
                  color: 'red', 
                  position: "absolute", 
                  top:'63%', 
                  left:'57%', 
                  zIndex:'150',
                  borderRadius: '3em',
                  height: '2.2rem',
                  width: '12.4rem',
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
              Start Stack
            </button>
            {/* </div> */}
      <video id="myVideo" autoPlay playsInline ref={videoRef} style={{ position: "fixed", top:'0', left:'0', width:'100%', height:'100vh', objectFit: "cover" }}>
          <source src="/assets/video/Zeroth.mp4" type="video/mp4" />    
      </video>
      </div>
    </>
  );
};


export default UseRefPlayer;