import React, { useState } from "react";
import { CartItem } from "../Types/cartItem.interface";
import { Product } from "../Types/product.interface";

export type ContextType = {
  addToCart(product: Product): void;
  handleCartClick(): void;
  updateQuantity(productId: string, condition: string): void;
  removeFromCart(productId: string): void;
  addedToCartProducts: Array<CartItem | undefined>;
  selectedCategories: Array<string | undefined>;
  cartActive: boolean;
  selectCategory(category: string): void;
  clearCart(): void;
  removeFilter(): void;
};

export const AppContext = React.createContext<ContextType | null>(null);

export const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [addedToCartProducts, setAddedToCardProducts] = useState<
    Array<CartItem | undefined>
  >([]);
  const [selectedCategories, setSelectedCategories] = useState<
    Array<string | undefined>
  >([]);
  const [cartActive, setCartActive] = useState<boolean>(false);

  const handleCartClick = () => {
    setCartActive(!cartActive);
  };

  const clearCart = () => {
    setAddedToCardProducts([]);
  };

  const addToCart = (product: Product) => {
    const addedProduct: CartItem = {
      id: "",
      name: "",
      imageUrl: "",
      quantity: 0,
      price: 0,
    };
    const addedProductList = addedToCartProducts;
    addedProduct.id = product.productId.value;
    addedProduct.name = product.name;
    addedProduct.imageUrl = product.imageUrl;
    addedProduct.quantity = 1;
    addedProduct.price = product.price;
    addedProductList.push(addedProduct);
    setAddedToCardProducts([...addedProductList]);
  };

  const selectCategory = (category: string) => {
    const categories = selectedCategories;
    if (categories.includes(category)) {
      const index = categories.findIndex((item) => item === category);
      categories.splice(index, 1);
      setSelectedCategories([...categories]);
    } else {
      categories.push(category);
      setSelectedCategories([...categories]);
    }
  };

  const updateQuantity = (productId: string, condition: string) => {
    const products = addedToCartProducts;
    const index = products.findIndex((product) => product?.id === productId);
    const product = addedToCartProducts[index];
    if (product) {
      switch (condition) {
        case "subtract":
          product.quantity = product.quantity - 1;
          break;

        case "add":
          product.quantity = product.quantity + 1;
          break;

        default:
          break;
      }
    }
    products.splice(index, 1);
    products.splice(index, 0, product);
    setAddedToCardProducts([...products]);
  };

  const removeFilter = () => {
    setSelectedCategories([]);
  };

  const removeFromCart = (productId: string) => {
    const products = addedToCartProducts;
    const index = products.findIndex((product) => product?.id === productId);
    products.splice(index, 1);
    setAddedToCardProducts([...products]);
  };

  return (
    <AppContext.Provider
      value={{
        addToCart,
        handleCartClick,
        removeFromCart,
        updateQuantity,
        addedToCartProducts,
        selectedCategories,
        cartActive,
        selectCategory,
        clearCart,
        removeFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
