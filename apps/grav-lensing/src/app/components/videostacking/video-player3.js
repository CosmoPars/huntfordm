import React, { useCallback, useRef } from "react";



const UseRefPlayer = () => {
  const videoRef1 = useRef();

  const handlePlay = () => {
    videoRef1.current.play();
  };

  return (
    <>
      <div>
            {/* <button 
              style={{
                  color: 'red', 
                  position: "fixed", 
                  top:'32%', 
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
                }} 
              onClick={handlePlay}>
              Stack the Rest
            </button> */}
      <video id="myVideo" autoPlay playsInline ref={videoRef1} style={{ position: "fixed", top:'0', left:'0', width:'100%', height:'100vh', objectFit: "cover" }}>
          <source src="../../assets/video/Third.mp4" type="video/mp4" />
      </video>
      </div>
    </>
  );
};

export default UseRefPlayer;