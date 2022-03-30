import styled from "styled-components";
import media from "../../globals/media-breakpoints";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.primary};
  position: fixed;
  width: calc(100% - (var(--default-spacing) * 2));
  margin: 3rem var(--default-spacing) var(--default-spacing);
  z-index: 110;
  border-radius: 1.25rem;
  transition: width 0.15s ease, left 0.15s ease, margin-top 0.15s ease;

  @media ${media.atleastMedium} {
    margin-left: 0;
    margin-right: 0;
    width: var(--modal-width);
    left: calc(50% - (var(--modal-width) / 2));
  }

  @media ${media.medium} {
    --modal-width: 45rem;
    
    margin-top: 5rem;
  }

  @media ${media.large} {
    --modal-width: 60rem;

    margin-top: 6.25rem;
  }
`

export const ModalInner = styled.div`
  color: ${props => props.theme.backgroundPrimary};
  margin: var(--default-spacing);
`