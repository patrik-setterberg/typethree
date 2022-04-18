import styled from "styled-components"

export const Main = styled.main`
	height: 100%;
	width: 100%;
	position: fixed;
	background-color: ${props => props.theme.backgroundPrimary};
	display: flex;
	justify-content: center;
`