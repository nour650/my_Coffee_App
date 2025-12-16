import React, { useContext, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { CartContext } from '../context/CartContext';
import Footer from '../components/Home/Footer';
import CartItem from '../components/CartScreen/CartItem';
import CartSummary from '../components/CartScreen/CartSummary';
import MaterialIcons from '@react-native-vector-icons/material-icons';

export default function CartScreen() {
  const { cart, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  const [activeTab, setActiveTab] = useState('Cart');

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const discount = 25000;
  const total = subtotal - discount;

  return (
    <View style={styles.container}>
      {/* 🔹 TITRE */}
      <Text style={styles.title}>Cart</Text>

      {cart.length === 0 ? (
        // 🟢 PANIER VIDE
      <View style={styles.emptyContainer}>
      <MaterialIcons name="remove-shopping-cart" size={50} color="#107523" />
      <Text style={styles.emptyText}>Votre panier est vide</Text>
    </View>
      ) : (
        // 🟢 LISTE DES ARTICLES
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CartItem
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <CartSummary
              subtotal={subtotal}
              discount={discount}
              total={total}
              cartLength={cart.length}
              clearCart={clearCart}
            />
          }
        />
      )}

      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5F0',
  },

  /* 🟢 TITRE */
  title: {
    position: 'absolute',
    top: 25,
    left: 29,
    width: 168,
    height: 25,
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    zIndex: 10,
  },

  /* ✅ ESPACE SOUS LE TITRE */
  list: {
    paddingTop: 80,
    paddingHorizontal: 10,
    paddingBottom: 100,
  },

emptyContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 100,
},
emptyText: {
  fontSize: 16,
  fontWeight: '600',
  color: '#555',
  marginTop: 10, 
},

});
