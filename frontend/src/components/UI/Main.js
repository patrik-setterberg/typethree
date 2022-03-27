import styled from "styled-components"

const StyledMain = styled.main`
	height: 100%;
	width: 100%;
	position: fixed;
	background-color: ${props => props.theme.backgroundPrimary};
`

const Main = (props) => {
  return (
    <StyledMain>{props.children}</StyledMain>
  );
}

export default Main;