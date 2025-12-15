// TextOnImageComponent.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TextOnImageComponent({ name, subtitle }: any) {
  return (
    <View style={styles.textOnImage}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textOnImage: {
    position: 'absolute',
    top: 180,
    left: 20,
    zIndex: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF',
    marginTop: 5,
  },
});
