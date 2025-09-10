import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import { useCallback } from "react"

const HeaderLogoImage = styled.img`
  height: 1em;
`

export const HeaderLogo = () => {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate('/tutorial')
  }, [navigate])
  return (
    <div onClick = {handleClick} style={{cursor:'pointer',zIndex:1000}}>
    <HeaderLogoImage src='/assets/img/header-logo.png' alt='The hunt for dark matter' draggable = 'false'/>
    </div>
  )
}
