import styled from "@emotion/styled"
import { ReactNode } from "react"
import { Label } from "./label"
import { TutorialText } from "./tutorial-text"

export type ViewerProps = {
  children: ReactNode
  heading: string
  subheading?: string
  labelSize?: string
  labelFontSize?: string
}

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

const borderRadius = '0.3em'
const ViewBox = styled.div`
  width: 320px;
  height: 180px;
  border-radius: ${borderRadius};
  border: 1px solid #FF0;
  background-color: black;
  overflow: hidden;
  position: relative;
  margin-left:2em;
  margin-bottom:2em;
`

const ViewBoxLabelPos = styled.div`
  position: absolute;
  top: 0.6em;
  left: 0.5em;
`

export const Viewer = ({
  children,
  labelSize,
  labelFontSize,
  ...tutorialTextProps
}: ViewerProps) => {

  return (
    <Layout>
      <ViewBox>
        {children}
        <ViewBoxLabelPos>
          <Label height={labelSize} fontSize={labelFontSize} borderRadius={borderRadius}>
            This is what we see
          </Label>
        </ViewBoxLabelPos>
      </ViewBox>
      <TutorialText {...tutorialTextProps} />
    </Layout>
  )
}
