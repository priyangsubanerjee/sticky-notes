import React, { useState, useEffect, useLayoutEffect } from "react";
import { checkIfLoggedIn } from "../helper/account";

function UserLoggedIn({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  useLayoutEffect(() => {
    if (checkIfLoggedIn()) {
      setLoggedIn(true);
    }
  }, []);

  return <div>{loggedIn ? children : <div></div>}</div>;
}

export default UserLoggedIn;
