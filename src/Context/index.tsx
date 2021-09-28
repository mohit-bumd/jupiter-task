import React, { useState } from "react";
import { Product } from "../Types/product.interface";

export type ContextType = {};

const initialState = {
  addedToCartProduct: {},
  selectedCategories: [""],
  cartActive: false,
};

export const AppContext = React.createContext<ContextType | null>(null);

export const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [addedToCartProduct, setAddedToCardProduct] = useState<Array<string>>(
    initialState.selectedCategories
  );
  const [selectedCategories, setSelectedCategories] = useState<
    Array<Product> | object
  >(initialState.addedToCartProduct);
  const [cartActive, setCartActive] = useState<boolean>(
    initialState.cartActive
  );

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
