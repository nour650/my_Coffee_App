// CartItem.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface CartItemProps {
  item: any;
  addToCart: (item: any) => void;
  removeFromCart: (id: string) => void; // <-- string ici
}


export default function CartItem({ item, addToCart, removeFromCart }: CartItemProps) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subtitle}>With Sugar</Text>
        <Text style={styles.price}>Rp {item.price}</Text>
        <Text style={styles.option}>Cup Size: {item.cupSize || 'Small'}</Text>
        <Text style={styles.option}>Level Sugar: {item.sugarLevel || 'No Sugar'}</Text>
        <Text style={styles.option}>Quantity: {item.quantity || 1}</Text>
      </View>

      <TouchableOpacity style={styles.plusButton} onPress={() => addToCart(item)}>
        <MaterialIcons name="add" size={20} color="#FFF" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <MaterialIcons name="delete" size={24} color="#FF4D4D" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 14,
    marginVertical: 6,
    padding: 10,
    alignItems: 'center',
  },
  image: { width: 60, height: 60, borderRadius: 10 },
  info: { flex: 1, marginLeft: 10 },
  name: { fontWeight: '700', fontSize: 14 },
  subtitle: { fontSize: 12, color: '#555' },
  price: { fontWeight: '600', color: '#107523', marginVertical: 2 },
  option: { fontSize: 12, color: '#555' },
  plusButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#107523',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
});
