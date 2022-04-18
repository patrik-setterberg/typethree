import { useContext } from "react";

import AuthContext from "../../../../context/auth-context";

import HeaderControlsLink from "../HeaderControlsLink/HeaderControlsLink";
import UserIcon from "./UserIcon";

const UserLink = () => {
  const authCtx = useContext(AuthContext);

  return (
    <HeaderControlsLink
      linkTo="/user"
      isUserLink={true}
      title={authCtx.isLoggedIn ? "{username}" : "Login/Register"}
    >
      <UserIcon isLoggedIn={authCtx.isLoggedIn} />
    </HeaderControlsLink>
  );
};

export default UserLink;
