import styled from "styled-components";

export const SettingsItem = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: auto;
  padding: var(--default-spacing) var(--default-spacing) calc(var(--default-spacing) * 2);
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;

  /* TEMP */
  & span {
    color: ${props => props.theme.primary};
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
      170deg,
      transparent 30%,
      ${(props) => props.theme.backgroundTertiary}
    );
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }

  &:hover::after {
    opacity: 0.75;
  }
`;
