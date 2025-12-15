import React, { useContext, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { CartContext } from '../context/CartContext';
import Footer from '../components/Home/Footer';
import CartItem from '../components/CartScreen/CartItem';
import CartSummary from '../components/CartScreen/CartSummary';

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
        ListFooterComponent={
          <CartSummary
            subtotal={subtotal}
            discount={discount}
            total={total}
            cartLength={cart.length}
            clearCart={clearCart}
          />
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5F0',
  },

  /* 🟢 TITRE (même style que Favorites) */
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
    paddingTop: 80, // important
    paddingHorizontal: 10,
    paddingBottom: 100, // espace footer
  },
});
