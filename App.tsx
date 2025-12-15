import React from 'react';
import AppTemplate from './src/templates/AppTemplate';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { FavoritesProvider } from './src/context/FavoritesContext';
import { CartProvider } from './src/context/CartContext';

export default function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <AppTemplate>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </AppTemplate>
      </CartProvider>
    </FavoritesProvider>
  );
}
