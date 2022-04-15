import React, { useState } from "react";

const AuthContext = React.createContext({
  userModalVisible: false,
  openModal: () => {},
  closeModal: () => {},
  // temp
  isLoggedIn: false,
});

interface AuthContextProps {
  children: React.ReactNode;
}

export const AuthContextProvider = ({
  children,
}: AuthContextProps): JSX.Element => {
  const [userModalVisible, setUserModalVisible] = useState(false);

  const openModal = () => {
    setUserModalVisible(true);
  };

  const closeModal = () => {
    setUserModalVisible(false);
  };

  return (
    <AuthContext.Provider
      value={{
        userModalVisible: userModalVisible,
        openModal: openModal,
        closeModal: closeModal,
        isLoggedIn: true,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
