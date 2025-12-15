import React, { useContext } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FavoritesContext } from '../../context/FavoritesContext';
import { CartContext } from '../../context/CartContext';

export default function CoffeeCard({ item, onPress, showFavorite, onDelete }: any) {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const { addToCart } = useContext(CartContext);

  const isFavorite = favorites.some(fav => fav.id === item.id);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />

        {/* Bouton + pour ajouter au panier */}
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() =>
            addToCart({
              ...item,
              cupSize: 'Small',
              sugarLevel: 'No Sugar',
            })
          }
        >
          <MaterialIcons name="add" size={18} color="#FFF" />
        </TouchableOpacity>

        {/* Bouton favoris */}
        {showFavorite && (
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() =>
              isFavorite ? removeFavorite(item.id) : addFavorite(item)
            }
          >
            <MaterialIcons
              name={isFavorite ? 'favorite' : 'favorite-border'}
              size={18}
              color={isFavorite ? '#FF4D4D' : '#999'}
            />
          </TouchableOpacity>
        )}

        {/* 🔹 Bouton supprimer */}
        {onDelete && (
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDelete(item.id)}
          >
            <MaterialIcons name="delete" size={18} color="#FFF" />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>
        <Text style={styles.price}>Rp {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    backgroundColor: '#FFF',
    borderRadius: 14,
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 80,
    backgroundColor: '#eee',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  plusButton: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#107523',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  deleteButton: {
    position: 'absolute',
    top: 52,
    left: 4,               // coin gauche
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FF4D4D', // rouge
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  info: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignItems: 'center',
  },
  name: {
    fontWeight: '700',
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  desc: {
    fontSize: 10,
    color: '#555',
    marginVertical: 1,
    textAlign: 'center',
  },
  price: {
    fontWeight: '600',
    color: '#107523',
    marginTop: 2,
    fontSize: 12,
  },
});
