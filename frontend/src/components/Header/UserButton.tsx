import HeaderButton from "../UI/HeaderButton/HeaderButton";
import UserIcon from "./UserIcon";

const UserButton = (): JSX.Element => {
  return (
    <HeaderButton
      clickFunc={() => {
        console.log("User");
      }}
      title="Login&nbsp;/&nbsp;Register"
      ariaLabel="User"
      modalIsOpen={false}
    >
      <UserIcon isLoggedIn={true} />
    </HeaderButton>
  );
};

export default UserButton;
