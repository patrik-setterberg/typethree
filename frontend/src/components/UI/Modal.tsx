import * as ReactDOM from "react-dom";
import * as S from "./Modal.styles";

import CloseButton from "./CloseButton";

interface Props {
  onClose: () => void;
}

const Backdrop = ({ onClose }: Props) => {
  return <S.Backdrop onClick={onClose}></S.Backdrop>;
};

/**
 * Modal component.
 * Requires an "onClose" function prop which hides the modal (sets some "modalVisible"
 * or similar state to false).
 */
interface Props {
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<Props> = ({ onClose, children }) => {
  const overlaysElement: HTMLElement = document.getElementById("overlays")!;

  return (
    <>
      {overlaysElement &&
        ReactDOM.createPortal(<Backdrop onClose={onClose} />, overlaysElement)}
      {overlaysElement &&
        ReactDOM.createPortal(
          <S.Modal>
            <CloseButton clickHandler={onClose} />
            <S.ModalInner>{children}</S.ModalInner>
          </S.Modal>,
          overlaysElement
        )}
    </>
  );
};

export default Modal;
