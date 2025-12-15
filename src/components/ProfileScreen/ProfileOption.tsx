// src/components/Profile/ProfileOption.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface ProfileOptionProps {
  icon: string;
  label: string;
  color?: string;
  onPress: () => void;
}

export default function ProfileOption({ icon, label, color = '#333', onPress }: ProfileOptionProps) {
  return (
    <TouchableOpacity style={styles.profileRow} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color={color} />
      <Text style={[styles.text, { color }]}>{label}</Text>
      <MaterialIcons name="chevron-right" size={24} color="#555" style={{ marginLeft: 'auto' }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profileRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  text: { fontSize: 16, fontWeight: '600', marginLeft: 15 },
});
