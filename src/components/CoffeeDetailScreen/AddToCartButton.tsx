import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { CartContext, CoffeeItem } from '../../context/CartContext';

export default function AddToCartButton({ coffee }: { coffee: CoffeeItem }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(coffee);

    // ✅ Afficher une alerte
    Alert.alert(
      'Ajouté au panier',
      `${coffee.name} a été ajouté à votre panier.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
      <Text style={styles.addText}>Add to cart | Rp {coffee.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#107523',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  addText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
});
