import styled from "styled-components"

export const Gears = styled.span`
  
  & .icon-gears {
    fill: none;
  }

  & .gear-1 {
    transform-origin: 226.5px 89px;
  }

  & .gear-2 {
    transform-origin: 86px 139.03px;
  }

  & .gear-3 {
    transform-origin: 152px 236px;
  }

  &:hover .gear-1,
  &:hover .gear-3 {
    animation-duration: 5.6s;
    animation-name: gear-spin;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  &:hover .gear-2 {
    animation-duration: 5.6s;
    animation-name: gear-spin-reverse;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

	@keyframes gear-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes gear-spin-reverse {
		from {
			transform: rotate(-1deg);
		}
		to {
			transform: rotate(-361deg);
		}
	}
`