import styled, { Theme } from "styled-components";
import media from "../../../globals/media-breakpoints";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
`;

export const Modal = styled.div<{
  theme: Theme;
}>`
  --modal-width: calc(100% - (var(--default-spacing) * 2));
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary};
  position: fixed;
  width: var(--modal-width);
  margin: 4.25rem var(--default-spacing) var(--default-spacing);
  z-index: 110;
  border-radius: 0.75rem;
  transition: width 0.15s ease, left 0.15s ease, margin-top 0.15s ease;

  @media ${media.atleastMedium} {
    margin-left: 0;
    margin-right: 0;
    left: calc(50% - (var(--modal-width) / 2));
  }

  @media ${media.medium} {
    --modal-width: 45rem;
    margin-top: 5rem;
  }

  @media ${media.large} {
    --modal-width: 65rem;
    margin-top: 5.25rem;
  }
`;

export const ModalInner = styled.div<{
  theme: Theme;
}>`
  color: ${({ theme }) => theme.backgroundPrimary};
  margin: 0 var(--default-spacing) var(--default-spacing);
`;

export const ModalTitle = styled.h2<{
  theme: Theme;
}>`
  text-align: center;
  color: ${({ theme }) => theme.backgroundTertiary};
`;
