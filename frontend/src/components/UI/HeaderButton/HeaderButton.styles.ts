import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
`

export const HeaderButton = styled.button`
  background: transparent;
	border: none;
	cursor: pointer;

  svg {
		width: 2rem;
		height: auto;
  }

  & svg path {
    transition: fill 0.2s ease;
    fill: ${props => props.theme.highlight};
  }

  &:hover svg path {
    fill: ${props => props.theme.primary};
  }
`

export const HeaderButtonTitle = styled.span`
  display: inline-block;
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  padding: 0.125rem 0.25rem;
  background-color: ${props => props.theme.highlight};
  /*background: linear-gradient(160deg, ${props => props.theme.primary} 0%, ${props => props.theme.highlight} 90%);*/
  color: ${props => props.theme.backgroundPrimary};
  border: 2px solid ${props => props.theme.backgroundSecondary};
  border-radius: 0.25rem;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.125s ease-in-out, top 0.125s ease-in-out;
  pointer-events: none;

  ${HeaderButton}:hover ~ & {
		opacity: 1;
    top: 2.25rem;
	}
`

