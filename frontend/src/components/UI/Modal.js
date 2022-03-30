import * as ReactDOM from "react-dom";
import * as S from "./Modal.styles";

import CloseButton from "./CloseButton";

const Backdrop = (props) => {
  return <S.Backdrop onClick={props.onClose}></S.Backdrop>;
};

/**
 * Modal component.
 * Requires an "onClose" function prop which hides the modal (sets some "modalVisible"
 * or similar state to false).
 */
const Modal = (props) => {
  const overlaysElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop /*onClose={props.onClose}*/ />,
        overlaysElement
      )}
      {ReactDOM.createPortal(
        <S.Modal>
          <CloseButton
            clickHandler={() =>
              console.log("should be props.onClose or something")
            }
          />
          <S.ModalInner>{props.children}</S.ModalInner>
        </S.Modal>,
        overlaysElement
      )}
    </>
  );
};

export default Modal;
