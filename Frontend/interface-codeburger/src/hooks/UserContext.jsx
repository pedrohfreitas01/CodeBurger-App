import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  //ficam os dados
  const user = { name: "Pedro", age: 23 };
  const outrouser = { name: "Lucy", age: 8 };

  return (
    <UserContext.Provider value={{ user, outrouser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used with UserContext");
    }
    
    return context
};

UserProvider.propTypes = {
  childre: PropTypes.node,
};


