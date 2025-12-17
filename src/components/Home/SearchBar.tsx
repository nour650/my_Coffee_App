// src/components/Home/SearchBar.tsx
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onFilterPress?: () => void; // 🔹 action filtre
}

export default function SearchBar({
  value,
  onChangeText,
  placeholder = 'Search...',
  onFilterPress,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      {/* 🔍 Icône recherche */}
      <MaterialIcons name="search" size={18} color="#555" style={styles.icon} />

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
      />

      {/* 🎛️ Icône filtre à droite */}
      <TouchableOpacity
        style={styles.filterButton}
        onPress={onFilterPress}
      >
        <MaterialIcons name="tune" size={20} color="#107523" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 12,
  },
  icon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  filterButton: {
    marginLeft: 8,
    padding: 4,
  },
});
