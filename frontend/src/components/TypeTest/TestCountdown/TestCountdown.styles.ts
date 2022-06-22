import styled from "styled-components";

import media from "../../../globals/media-breakpoints";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 6rem;
  height: 6rem;

  @media ${media.atleastMedium} {
    width: 8rem;
    height: 8rem;
  }
`;

export const CountdownCircle = styled.span<{
  circumference: number;
  dashOffset: number;
  focused: boolean;
}>`
  display: inline-block;
  width: 100%;
  height: auto;

  & svg {
    fill: none;
    transform: rotate(-90deg);

    & * {
      fill: none;
    }

    & circle {
      stroke-width: 1.5rem;
      stroke-linejoin: miter;
      transition: stroke-dashoffset 0.5s ease-out, stroke-width 0.15s ease,
        stroke 0.15s ease;

      ${Wrapper}:hover & {
        stroke-width: 2rem;
      }
    }

    & .circle--background {
      stroke: ${(props) => props.theme.backgroundFourthenary};
    }

    & .circle--countdown {
      stroke: ${(props) =>
        props.focused ? props.theme.highlight : props.theme.primary};
      stroke-dasharray: ${(props) => props.circumference}px;
      stroke-dashoffset: ${(props) => props.dashOffset}px;
    }
  }
`;

export const Counter = styled.span`
  padding-bottom: 0.25rem;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1;
  color: ${(props) => props.theme.primary};
  position: absolute;

  @media ${media.atleastMedium} {
    font-size: 2.5rem;
  }
`;
