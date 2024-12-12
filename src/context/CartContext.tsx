import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
  quantity: number;
  image: string;
}

interface CartContextProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  addProduct: (product: Product) => void; // Add function to add a product
}

// Define props for the CartProvider
interface CartProviderProps {
  children: ReactNode; // Type for children
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (newProduct: Product) => {
    setProducts((prevProducts) => {
      // Check if the product already exists in the cart
      const existingProduct = prevProducts.find(
        (product) => product.id === newProduct.id
      );

      if (existingProduct) {
        // Update the quantity of the existing product
        return prevProducts.map((product) =>
          product.id === newProduct.id
            ? { ...product, quantity: product.quantity + newProduct.quantity }
            : product
        );
      }

      // If the product is not in the cart, add it
      return [...prevProducts, newProduct];
    });
  };

  return (
    <CartContext.Provider value={{ products, setProducts, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
