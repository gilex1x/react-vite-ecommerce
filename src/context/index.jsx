/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";

export const shoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  //Counter
  const [count, setCount] = useState(0);
  //Is Open/close
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const handleOpenDetail = () => setIsDetailOpen(true);
  const handleCloseDetail = () => setIsDetailOpen(false);
  const [productToShow, setProductToShow] = useState({})
  return (
    <shoppingCardContext.Provider value={{
      count,
      setCount,
      isDetailOpen,
      handleOpenDetail,
      handleCloseDetail,
      productToShow,
      setProductToShow
    }}>
      {children}
    </shoppingCardContext.Provider>
  );
};
