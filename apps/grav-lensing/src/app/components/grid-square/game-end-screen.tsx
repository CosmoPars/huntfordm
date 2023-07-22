import styled from '@emotion/styled'
import { useState } from "react"
import {BackButton} from '../buttons/back-to-tut'
import{ReplayButton} from '../buttons/replay-button'
import { URLButton } from '../buttons/URL-button'
import { NotificationPill } from '../notification-pill'
type modalProp = {
    open:boolean
    isMore:boolean
    onClose:()=>void
    children:React.ReactNode
    back:()=>void
    replay:()=>void
    gameLevel:string
}
const ModalOverlay = styled.div`
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: rgba(0,0,0,0.7);
    zindex: 1000;
`
const ModelHeader = styled.div`
    position: fixed;
    top: 25%;
    left:50%;
    transform: translate(-50%,-50%);
    width:400px;
    padding:25px;
    zindex:1000;
    color:white;
    justify-content:center;
    text-align:center;
    font-size:50px;
    font-weight: 600;
`
const ModelHeader2 = styled.div`
    position: fixed;
    top: 31%;
    left:50%;
    transform: translate(-50%,-50%);
    width:500px;
    padding:25px;
    zindex:1000;
    color:white;
    justify-content:center;
    text-align:center;
    font-size:35px;
`
const ModalDiv = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width:200px;
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

`
const ModalFooter = styled.div`
    position: fixed;
    top: 75%;
    left: 50%;
    width:1200px;
    transform: translate(-50%,-50%);
    zindex:1000;
    justify-content: center;
    display:flex;
    flex-direction: row;
`
const FooterText = styled.div`
    position: fixed;
    top: 60%;
    left: 50%;
    width: 700px;
    padding-top:80px;
    transform: translate(-50%,-50%);
    zindex:1000;
    text-align:center;
    font-size:1.5em;
    color:white;
`

const Text = styled.p`
    padding-top:20px;
    font-size:15px;
    color:white;
    font-weight:normal;

`

export const GameEndScreen = ({ open, isMore, children, onClose, back, replay, gameLevel }: modalProp) => {

  const [showUrlCopied, setShowUrlCopied] = useState(false)

  if (!open) return null

  return(
    <ModalOverlay>
      <div>
        <ModelHeader>
          Well Done!
        </ModelHeader>
        <ModelHeader2>
          You've found all the Dark Matter
        </ModelHeader2>
        {
          showUrlCopied && <NotificationPill
            text="URL Copied to Clipboard"
            fadeoutCallback={() => setShowUrlCopied(false)}
          />
        }
        <ModalDiv>
              {children}<br/>
              <Text>FINAL FUNDING REMAINING</Text>
        </ModalDiv>
      </div>
      {isMore===true?(
        <FooterText>Wow, you've got even more funding than when you started!</FooterText>
      ):null}
      <ModalFooter>
        <BackButton onClick = {back}></BackButton>
        <ReplayButton onClick={replay}></ReplayButton>
        <URLButton onClick={() => setShowUrlCopied(true)}/>
      </ModalFooter>
    </ModalOverlay>
  )
}

export default GameEndScreen
