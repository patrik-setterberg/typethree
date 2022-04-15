import * as S from "./UserIcon.styles";

interface UserIconProps {
  isLoggedIn: boolean;
  modalIsOpen: boolean;
}

const UserIcon = ({ isLoggedIn, modalIsOpen }: UserIconProps): JSX.Element => {
  return (
    <S.UserIcon isLoggedIn={isLoggedIn} modalIsOpen={modalIsOpen}>
      <svg viewBox="0 0 325 325" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          className="user-icon__head"
          cx="163"
          cy="109"
          r="51"
          fill="black"
        />
        <path
          className="user-icon__body"
          d="M163.5 192C134.833 189.667 78 184 44.5 261C109.5 329 223 335 282 256.5C262 189 188.333 187.5 163.5 192Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M162.5 154C187.077 154 207 134.077 207 109.5C207 84.9233 187.077 65 162.5 65C137.923 65 118 84.9233 118 109.5C118 134.077 137.923 154 162.5 154ZM162.5 170C195.913 170 223 142.913 223 109.5C223 76.0868 195.913 49 162.5 49C129.087 49 102 76.0868 102 109.5C102 142.913 129.087 170 162.5 170Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.9554 263.201C39.206 268.578 43.7894 273.679 48.6743 278.474C77.9918 307.252 118.173 325 162.5 325C207.282 325 247.833 306.885 277.226 277.584C282.073 272.752 286.616 267.615 290.825 262.206C312.244 234.679 325 200.079 325 162.5C325 72.7537 252.246 0 162.5 0C72.7537 0 0 72.7537 0 162.5C0 200.534 13.0665 235.516 34.9554 263.201ZM284.925 242.994C300.143 219.894 309 192.231 309 162.5C309 81.5903 243.41 16 162.5 16C81.5903 16 16 81.5903 16 162.5C16 192.639 25.1014 220.653 40.7058 243.943C59.6116 194.842 107.237 182 163 182C218.403 182 265.773 194.393 284.925 242.994ZM52.4514 259.206C79.2996 289.735 118.65 309 162.5 309C206.76 309 246.436 289.373 273.298 258.347C259.226 210.739 215.17 198 163 198C110.517 198 66.2449 211.158 52.4514 259.206Z"
          fill="black"
        />
      </svg>
    </S.UserIcon>
  );
};

export default UserIcon;
