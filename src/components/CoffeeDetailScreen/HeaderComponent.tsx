// HeaderComponent.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface HeaderProps {
  navigation: any;
  showFavorite?: boolean;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export default function HeaderComponent({
  navigation,
  showFavorite = false,
  isFavorite = false,
  onToggleFavorite,
}: HeaderProps) {
  return (
    <View style={styles.header}>
      {/* Back */}
      <TouchableOpacity
        style={styles.iconCircle}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back-ios" size={20} color="#107523" />
      </TouchableOpacity>

      {/* Favoris →  Special Offers */}
      {showFavorite && (
        <TouchableOpacity
          style={styles.iconCircle}
          onPress={onToggleFavorite}
        >
          <MaterialIcons
            name={isFavorite ? 'favorite' : 'favorite-border'}
            size={20}
            color={isFavorite ? '#FF4D4D' : '#107523'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 30,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  iconCircle: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
});
