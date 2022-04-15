import HeaderControlsButton from "../HeaderControlsButton/HeaderControlsButton";
import UserIcon from "./UserIcon";

const UserButton = (): JSX.Element => {

  // :(
  const isLoggedIn: boolean = false;

  return (
    <HeaderControlsButton
      clickFunc={() => {
        console.log("User");
      }}
      title={isLoggedIn ? "User" : "Login/Register"}
      ariaLabel="User"
      modalIsOpen={false}
    >
      <UserIcon isLoggedIn={isLoggedIn} />
    </HeaderControlsButton>
  );
};

export default UserButton;
