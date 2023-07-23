import { useState, useEffect } from "react";
import styled from "@emotion/styled";

const FadedDiv = styled.div`
  z-index: 100;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;

const TextDiv = styled.div`
  z-index: 101;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
  background: #000;
  padding: 25px;
  zindex: 1000;
  color: yellow;
  border: 1px solid yellow;
  border-radius: 10px;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  text-align: right;
  flex-direction: row;
  opacity: 1;
`;

export const ModalDiv = ({ text }: { text: string }) => {
  let [showModal, setShowModal] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1080) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {showModal && (
        <>
          <FadedDiv />

          <TextDiv>
              <button
                style={{ color: "red", border: "0px", background: "black", scale:"2", position: "absolute", top: "30px", right: "30px" }}
                onClick={() => setShowModal(false)}
              >
                X
              </button>
              <p>{text}</p>
          </TextDiv>
        </>
      )}
    </>
  );
};
