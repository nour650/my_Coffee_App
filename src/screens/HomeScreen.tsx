import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';

import Header from '../components/Home/Header';
import CategoryCard from '../components/Home/CategoryCard';
import CoffeeCard from '../components/Home/CoffeeCard';
import Footer from '../components/Home/Footer';
import SearchBar from '../components/Home/SearchBar';
import AddCoffeeForm from '../components/Home/AddCoffeeForm';
import { categories, coffeeData, specialOffers } from '../data/coffeeData';

export default function HomeScreen({ navigation }: any) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('Home');
  const [searchText, setSearchText] = useState('');
  const [coffeeList, setCoffeeList] = useState(coffeeData);
  const [showModal, setShowModal] = useState(false);

  const handleAddCoffee = (coffee: any) => {
    setCoffeeList(prev => [...prev, coffee]);
    setShowModal(false);
  };

  const handleDeleteCoffee = (id: string) => {
    setCoffeeList(prev => prev.filter(c => c.id !== id));
  };

  const filteredCoffee = coffeeList.filter(item => {
    const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Header />
          <Text style={styles.greeting}>Good morning, Yudi</Text>

          <SearchBar
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholder="Search Coffee ..."
          />

          <TouchableOpacity
            style={styles.addCoffeeButton}
            onPress={() => setShowModal(true)}
          >
            <Text style={styles.addCoffeeText}>+ Add Coffee</Text>
          </TouchableOpacity>

          {/* Categories */}
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.key}
            renderItem={({ item }) => (
              <CategoryCard
                item={item}
                isActive={selectedCategory === item.key}
                onPress={() => setSelectedCategory(item.key)}
              />
            )}
            contentContainerStyle={styles.categoriesList}
          />

          {/* Coffee List */}
          <Text style={styles.sectionTitle}>Coffee</Text>
          <FlatList
  data={filteredCoffee}
  horizontal
  showsHorizontalScrollIndicator={false}
  keyExtractor={item => item.id}
  renderItem={({ item }) => (
    <CoffeeCard
      item={item}
      onPress={() => navigation.navigate('CoffeeDetail', { coffee: item })}
      showFavorite={false}  // <-- ici pas de favoris
      onDelete={handleDeleteCoffee}
    />
  )}
  contentContainerStyle={styles.coffeeList}
/>

          {/* Special Offers */}
          <Text style={styles.sectionTitle}>Special Offers</Text>
          <FlatList
            data={specialOffers}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CoffeeCard
                item={item}
                onPress={() => navigation.navigate('CoffeeDetail', { coffee: item })}
                showFavorite={true}
                onDelete={handleDeleteCoffee}
              />
            )}
            contentContainerStyle={styles.specialList}
          />
        </View>
      </ScrollView>

      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Modal */}
      <Modal
        visible={showModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <AddCoffeeForm
              onAddCoffee={handleAddCoffee}
              onClose={() => setShowModal(false)}
            />
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F5F0', paddingTop: 40, paddingHorizontal: 15 },
  greeting: { fontSize: 18, fontWeight: '600', color: '#333', marginBottom: 10 },
  addCoffeeButton: { backgroundColor: '#107523', padding: 10, borderRadius: 8, marginBottom: 12, alignSelf: 'flex-start' },
  addCoffeeText: { color: '#fff', fontWeight: '600', textAlign: 'center' },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 6, marginTop: 10 },
  categoriesList: { paddingLeft: 5, paddingBottom: 8 },
  coffeeList: { paddingLeft: 5, paddingBottom: 8 },
  specialList: { paddingLeft: 5, paddingBottom: 8 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 20 },
  modalCard: { backgroundColor: '#fff', borderRadius: 12, padding: 20 },
});
