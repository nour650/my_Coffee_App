// CartSummary.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  total: number;
  cartLength: number;
  clearCart: () => void;
}

export default function CartSummary({ subtotal, discount, total, cartLength, clearCart }: CartSummaryProps) {
  return (
    <View style={styles.summary}>
      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>Rp {subtotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Discount</Text>
        <Text style={styles.value}>Rp {discount}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.label, { fontWeight: '700' }]}>Total</Text>
        <Text style={[styles.value, { fontWeight: '700' }]}>{total}</Text>
      </View>

      <Text style={styles.payment}>Payment</Text>
      <View style={styles.paymentMethods}>
        <TouchableOpacity style={styles.paymentButton} onPress={() => Alert.alert('Payment', 'Paid with VISA')}>
          <Text>VISA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentButton} onPress={() => Alert.alert('Payment', 'Paid with PayPal')}>
          <Text>PayPal</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.buyButton}
        onPress={() => {
          if (cartLength === 0) {
            Alert.alert('Cart Empty', 'Please add some coffee before buying!');
          } else {
            Alert.alert('Success', 'Your order has been placed!');
            clearCart();
          }
        }}
      >
        <Text style={styles.buyText}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  summary: {
    marginTop: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 15,
    width: 330,
    alignSelf: 'center',
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  label: { fontSize: 14, color: '#555' },
  value: { fontSize: 14, color: '#333' },
  payment: { fontWeight: '700', fontSize: 16, marginTop: 15 },
  paymentMethods: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  paymentButton: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buyButton: {
    backgroundColor: '#107523',
    width: 330,
    height: 38,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  buyText: { color: '#FFF', fontWeight: '700', fontSize: 16 },
});
