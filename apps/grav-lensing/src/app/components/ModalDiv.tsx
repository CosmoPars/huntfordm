import React from "react"
import styled from "@emotion/styled"

const FadedDiv = styled.div`
    z-index: 100;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.5;
`

const TextDiv = styled.div`
    z-index: 101;
    position: fixed;
    top: 50%;
    left: 50%;
    width:500px;
    transform: translate(-50%,-50%);
    background: #000;
    padding:25px;
    zindex:1000;
    color:yellow;
    border: 1px solid yellow;
    border-radius:10px;
    text-align:center;
    font-size:40px;
    font-weight:600;
    opacity: 1;
`

export const ModalDiv = ({ text }: { text: string }) => {
    return (
      <>
        <FadedDiv/>
        <TextDiv>{text}</TextDiv>
      </>
    )
}
