import * as S from "./CloseButton.styles";

const CloseButton = (props) => {
  return (
    <S.CloseButton onClick={props.clickHandler}>
      <svg viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M113.385 95L189.752 18.6324L171.368 0.247681L95 76.6152L18.6324 0.247742L0.247681 18.6325L76.6152 95L0.247681 171.368L18.6324 189.752L95 113.385L171.368 189.752L189.752 171.368L113.385 95Z" />
      </svg>
    </S.CloseButton>
  );
};

export default CloseButton;
