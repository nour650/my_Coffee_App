import React, { useContext, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CoffeeCard from '../components/Home/CoffeeCard';
import Footer from '../components/Home/Footer';
import { FavoritesContext } from '../context/FavoritesContext';

export default function FavoriteScreen() {
  const [activeTab, setActiveTab] = useState('Favorite');
  const { favorites } = useContext(FavoritesContext); // plus besoin de removeFavorite ici

  return (
    <View style={styles.container}>
           {/* 🔹 TITRE */}
      <Text style={styles.title}>Favorites</Text>

      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <CoffeeCard
            item={item}
            onPress={() => {}}
            showFavorite={true} // afficher cœur dans la liste des favoris
          />
        )}
      />
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}




const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F5F0' },
  list: {
    paddingTop: 80, // ⭐ IMPORTANT → descend les cards
    paddingHorizontal: 10,
    paddingBottom: 90, // espace footer
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
   title: {
    position: 'absolute',
    top: 25,
    left: 29,
    width: 168,
    height: 25,
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    opacity: 1,
    zIndex: 10,
  },
});
