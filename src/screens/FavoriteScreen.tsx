import React, { useContext, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CoffeeCard from '../components/Home/CoffeeCard';
import Footer from '../components/Home/Footer';
import { FavoritesContext } from '../context/FavoritesContext';

export default function FavoriteScreen() {
  const [activeTab, setActiveTab] = useState('Favorite');
  const { favorites } = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      {/* 🔹 TITRE */}
      <Text style={styles.title}>Favorites</Text>

      {favorites.length === 0 ? (
        // 🟢 FAVORIS VIDE
        <View style={styles.emptyContainer}>
          <MaterialIcons name="favorite-border" size={50} color="#107523" />
          <Text style={styles.emptyText}>Vous n'avez aucun favori</Text>
        </View>
      ) : (
        // 🟢 LISTE DES FAVORIS
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <CoffeeCard
              item={item}
              onPress={() => {}}
              showFavorite={true}
            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F5F0' },

  /* 🟢 TITRE */
  title: {
    position: 'absolute',
    top: 25,
    left: 29,
    width: 168,
    height: 25,
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    zIndex: 10,
  },

  /* ✅ ESPACE SOUS LE TITRE */
  list: {
    paddingTop: 80,
    paddingHorizontal: 10,
    paddingBottom: 90,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
  },
});
