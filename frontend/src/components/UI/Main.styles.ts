import styled from "styled-components"

export const Main = styled.main`
	height: 100%;
	width: 100%;
	position: fixed;
  z-index: 90;
	background-color: ${props => props.theme.backgroundPrimary};
`