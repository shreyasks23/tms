import { useState, useMemo } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider(props: { children: React.ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  const authContextValue = useMemo(
    () => ({
      isLoggedIn: loggedIn,
      setLoggedIn: setLoggedIn,
      setLoggedInUser: setLoggedInUser,
      loggedInUser: loggedInUser,
    }),
    [loggedIn, setLoggedIn, setLoggedInUser, loggedInUser]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}
