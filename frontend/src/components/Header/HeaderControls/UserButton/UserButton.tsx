import { useContext } from "react";

import AuthContext from "../../../../context/auth-context";
import HeaderControlsButton from "../HeaderControlsButton/HeaderControlsButton";
import UserIcon from "./UserIcon";

const UserButton = (): JSX.Element => {

  const authCtx = useContext(AuthContext);

  return (
    <HeaderControlsButton
      clickFunc={authCtx.openModal}
      title={authCtx.isLoggedIn ? "User" : "Login/Register"}
      ariaLabel="User"
      modalIsOpen={authCtx.userModalVisible}
    >
      <UserIcon isLoggedIn={authCtx.isLoggedIn} modalIsOpen={authCtx.userModalVisible} />
    </HeaderControlsButton>
  );
};

export default UserButton;
