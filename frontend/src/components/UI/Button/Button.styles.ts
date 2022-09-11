import styled, { css, Theme } from "styled-components";

export const Button = styled.button<{
  isActive: boolean;
  theme: Theme;
}>`
  width: 100px;
  height: fit-content;
  padding: 0.375rem;
  border: none;
  border-radius: 0.375rem;
  font-family: var(--font-main);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  background: linear-gradient(
    170deg,
    ${({ theme }) => theme.primary} 0%,
    ${({ theme }) => theme.primary} 33%,
    ${({ theme }) => theme.highlight} 66%
  );

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${({ theme }) => theme.primary};
    `};

  background-size: 100% 300%;
  background-position: 100% 100%;
  transition: background-position 0.6s ease-out, letter-spacing 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background-position: 100% 0%;
    letter-spacing: 1.2px;
  }

  &:active {
    background: ${({ theme }) => theme.highlight};
  }

  & + & {
    margin-left: calc(var(--default-spacing) / 2);
  }
`;
