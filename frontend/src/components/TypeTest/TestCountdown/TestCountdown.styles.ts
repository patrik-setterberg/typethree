import styled, { Theme } from "styled-components";

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
  theme: Theme;
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
      stroke: ${({ theme }) => theme.backgroundFourthenary};
    }

    & .circle--countdown {
      stroke: ${({ focused, theme }) =>
        focused ? theme.highlight : theme.primary};
      stroke-dasharray: ${({ circumference }) => circumference}px;
      stroke-dashoffset: ${({ dashOffset }) => dashOffset}px;
    }
  }
`;

export const Counter = styled.span<{
  theme: Theme;
}>`
  padding-bottom: 0.25rem;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1;
  color: ${({ theme }) => theme.primary};
  position: absolute;

  @media ${media.atleastMedium} {
    font-size: 2.5rem;
  }
`;
