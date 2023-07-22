import styled  from '@emotion/styled'
import { ReactComponent as HelpIcon } from '../svg/help-icon.svg'
import { AboutModal } from '../about-modal'
import { useCallback, useState } from 'react'

const ButtonPill = styled.div`
  border-radius: 2.4em;
  height: 2.4em;
  width: 2.4em;

  background-color: #000A;
  display: flex;
  flex-direction:row
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align:center;
  cursor: pointer;
  padding: 0.1em;
  color: white;
  margin: 20px;
  box-shadow: rgba(255,255,255,0.4) 0 0 10px;
  &:hover {
    box-shadow: 0 0 10px;
  }
`

export type HelpButtonProps = {
  onClick?: () => void
}

export const HelpButton = ({
  onClick
}: HelpButtonProps) => {

  const [modalOpen, setModalOpen] = useState(false)

  const handleClick = useCallback(() => {
    setModalOpen((prev) => { return !prev })
    if (onClick) {
      onClick()
    }
  }, [onClick])

  const handleClose = useCallback(() => {
    setModalOpen(false)
  }, [])

  return (
    <>
      <ButtonPill onClick={handleClick}>
        <HelpIcon color='#fff' style={{height: '2em', width: '2em', margin: '0.2em'}} />
      </ButtonPill>
      <AboutModal open={modalOpen} onClose={handleClose} />
    </>

  )
}
