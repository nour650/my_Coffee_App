// CoffeeDetailScreen.tsx
import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../components/CoffeeDetailScreen/HeaderComponent';
import TextOnImageComponent from '../components/CoffeeDetailScreen/TextOnImageComponent';
import OptionSelector from '../components/CoffeeDetailScreen/OptionSelector';
import AddToCartButton from '../components/CoffeeDetailScreen/AddToCartButton';
import { FavoritesContext } from '../context/FavoritesContext';

const { width } = Dimensions.get('window');

export default function CoffeeDetailScreen({ route }: any) {
  const navigation = useNavigation();
  const { coffee } = route.params;

  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

  const [cupSize, setCupSize] = useState('Small');
  const [sugarLevel, setSugarLevel] = useState('No Sugar');

  const coffeeWithOptions = { ...coffee, cupSize, sugarLevel };

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image source={coffee.image} style={styles.image} />

      {/* HEADER → Favoris UNIQUEMENT pour Special Offers */}
      <HeaderComponent
        navigation={navigation}
        showFavorite={coffee.isSpecial === true}
        isFavorite={coffee.isSpecial ? isFavorite(coffee.id) : false}
        onToggleFavorite={
          coffee.isSpecial ? () => toggleFavorite(coffee) : undefined
        }
      />

      {/* Nom */}
      <TextOnImageComponent name={coffee.name} subtitle="With Sugar" />

      {/* Contenu */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.detailCard}>
          <OptionSelector
            label="Cup Size"
            options={['Small', 'Medium', 'Large']}
            selected={cupSize}
            onSelect={setCupSize}
          />

          <OptionSelector
            label="Level Sugar"
            options={['No Sugar', 'Low', 'Medium']}
            selected={sugarLevel}
            onSelect={setSugarLevel}
          />

          <Text style={styles.label}>About</Text>
          <Text style={styles.about}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          <AddToCartButton coffee={coffeeWithOptions} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F5F0' },
  image: {
    width: width,
    height: 350,
    position: 'absolute',
    top: -50,
    resizeMode: 'cover',
  },
  contentContainer: {
    paddingTop: 300,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  detailCard: {
    width: 360,
    alignSelf: 'center',
    minHeight: 450,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    elevation: 5,
  },
  label: { fontWeight: '600', fontSize: 16, marginVertical: 10 },
  about: { fontSize: 14, color: '#555', marginBottom: 20 },
});
