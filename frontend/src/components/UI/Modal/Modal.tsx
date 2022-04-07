import * as ReactDOM from "react-dom";
import * as S from "./Modal.styles";

import CloseButton from "./CloseButton";

interface BackdropProps {
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
}

const Backdrop = ({ onClose }: BackdropProps): JSX.Element => {
  return <S.Backdrop onClick={onClose}></S.Backdrop>;
};

/**
 * Modal component.
 */
interface ModalProps {
  title: string;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
}

const Modal = ({ title, onClose, children }: ModalProps): JSX.Element => {
  const overlaysElement: HTMLElement = document.getElementById("overlays")!;

  return (
    <>
      {overlaysElement &&
        ReactDOM.createPortal(<Backdrop onClose={onClose} />, overlaysElement)}
      {overlaysElement &&
        ReactDOM.createPortal(
          <S.Modal>
            <CloseButton clickHandler={onClose} />
            <S.ModalInner>
              <S.ModalTitle>{title}</S.ModalTitle>
              {children}
            </S.ModalInner>
          </S.Modal>,
          overlaysElement
        )}
    </>
  );
};

export default Modal;
