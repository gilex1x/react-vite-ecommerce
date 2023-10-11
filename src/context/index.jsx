/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";

export const shoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  const [count, setCount] = useState(null);
  return (
    <shoppingCardContext.Provider value={{count,setCount}}>
        { children }
    </shoppingCardContext.Provider>
    );
};
