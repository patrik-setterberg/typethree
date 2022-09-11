import styled, { Theme } from "styled-components";
import { rgba } from "../../../util/rgba";

export const SettingsItem = styled.li<{
  theme: Theme;
}>`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: calc(var(--default-spacing) * 1.5) var(--default-spacing);
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  border-right: 1px solid ${({ theme }) => rgba(theme.primary, 0.03)};
  z-index: 0;

  &:hover {
    border-top: 1px solid ${({ theme }) => rgba(theme.primary, 0.1)};
  }

  /* TEMP */
  & span {
    color: ${({ theme }) => theme.primary};
    font-size: 0.875rem;
    display: inline-block;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: linear-gradient(
      120deg,
      ${({ theme }) => rgba(theme.primary, 0.4)},
      transparent
    );
    border-bottom: 1px solid ${({ theme }) => rgba(theme.primary, 0.03)};
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }

  &:hover::after {
    opacity: 0.1;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;
