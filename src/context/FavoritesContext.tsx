// FavoritesContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface CoffeeItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: any;
}

interface FavoritesContextType {
  favorites: CoffeeItem[];
  addFavorite: (item: CoffeeItem) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (item: CoffeeItem) => void; // <-- ajouté
  isFavorite: (id: string) => boolean;        // <-- ajouté
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  toggleFavorite: () => {},
  isFavorite: () => false,
});

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<CoffeeItem[]>([]);

  const addFavorite = (item: CoffeeItem) => {
    setFavorites(prev => {
      if (prev.find(fav => fav.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites(prev => prev.filter(fav => fav.id !== id));
  };

  const toggleFavorite = (item: CoffeeItem) => {
    if (favorites.some(f => f.id === item.id)) removeFavorite(item.id);
    else addFavorite(item);
  };

  const isFavorite = (id: string) => favorites.some(f => f.id === id);

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addFavorite,
      removeFavorite,
      toggleFavorite,
      isFavorite,
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};
