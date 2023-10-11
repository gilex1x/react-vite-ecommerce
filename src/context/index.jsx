/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";

export const shoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const handleOpenDetail=()=>setIsDetailOpen(true);
  const handleCloseDetail=()=>setIsDetailOpen(false);
  return (
    <shoppingCardContext.Provider value={{count,setCount, isDetailOpen, handleOpenDetail, handleCloseDetail}}>
        { children }
    </shoppingCardContext.Provider>
    );
};
