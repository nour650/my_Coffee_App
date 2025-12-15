import React, { createContext, useState, ReactNode } from 'react';

export interface CoffeeItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: any;
  cupSize?: string;
  sugarLevel?: string;
quantity?: number; // <-- ajouter cette propriété

}

interface CartContextType {
  cart: CoffeeItem[];
  addToCart: (item: CoffeeItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CoffeeItem[]>([]);

const addToCart = (product: any) => {
  setCart(prev => {
    const exists = prev.find(item => item.id === product.id);
    if (exists) {
      return prev.map(item =>
        item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
    } else {
      return [...prev, { ...product, quantity: 1 }];
    }
  });
};


  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
