import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CategoryCard({ item, isActive, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.categoryItem, isActive && styles.categoryItemActive]}
    >
      <MaterialIcons
        name={item.icon}
        size={16}
        color={isActive ? '#FFF' : '#555'}
      />
      <Text
        style={[styles.categoryText, isActive && styles.categoryTextActive]}
        numberOfLines={1}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryItem: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 12,
  height: 32,
  borderRadius: 16,
  backgroundColor: '#EEE',
  marginRight: 12,

  // Shadow iOS
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },

  // Shadow Android
  elevation: 3,
},

  categoryItemActive: { backgroundColor: '#107523' },
  categoryText: { marginLeft: 5, fontSize: 12, color: '#555', fontWeight: '500' },
  categoryTextActive: { color: '#FFF', fontWeight: '600' },
});
