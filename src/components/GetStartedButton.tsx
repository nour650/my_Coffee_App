import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface GetStartedButtonProps {
  onPress: () => void;
}

export default function GetStartedButton({ onPress }: GetStartedButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#107523',
    width: 235,
    height: 54,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
