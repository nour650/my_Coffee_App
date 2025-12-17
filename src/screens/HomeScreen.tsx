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
  // -------------------- HOOKS --------------------
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('Home');
  const [searchText, setSearchText] = useState('');
  const [coffeeList, setCoffeeList] = useState(coffeeData);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [priceFilter, setPriceFilter] = useState<'ALL' | 'LOW' | 'HIGH'>('ALL');

  // -------------------- HANDLERS --------------------
  const handleAddCoffee = (coffee: any) => {
    setCoffeeList(prev => [...prev, coffee]);
    setShowAddModal(false);
  };

  const handleDeleteCoffee = (id: string) => {
    setCoffeeList(prev => prev.filter(c => c.id !== id));
  };

  // -------------------- FILTRAGE --------------------
  const filteredCoffee = coffeeList.filter(item => {
    const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    const matchPrice =
      priceFilter === 'ALL' ||
      (priceFilter === 'LOW' && item.price <= 50000) ||
      (priceFilter === 'HIGH' && item.price > 50000);

    return matchCategory && matchSearch && matchPrice;
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

          {/* SEARCH + FILTER BUTTON */}
          <SearchBar
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search Coffee ..."
            onFilterPress={() => setShowFilterModal(true)}
          />

          {/* ADD COFFEE BUTTON */}
          <TouchableOpacity
            style={styles.addCoffeeButton}
            onPress={() => setShowAddModal(true)}
          >
            <Text style={styles.addCoffeeText}>+ Add Coffee</Text>
          </TouchableOpacity>

          {/* CATEGORIES */}
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
          />

          {/* COFFEE LIST */}
          <Text style={styles.sectionTitle}>Coffee</Text>
          <FlatList
            data={filteredCoffee}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CoffeeCard
                item={item}
                onPress={() =>
                  navigation.navigate('CoffeeDetail', { coffee: item })
                }
                showFavorite={false}
                onDelete={handleDeleteCoffee}
              />
            )}
          />

          {/* SPECIAL OFFERS */}
          <Text style={styles.sectionTitle}>Special Offers</Text>
          <FlatList
            data={specialOffers}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CoffeeCard
                item={item}
                onPress={() =>
                  navigation.navigate('CoffeeDetail', { coffee: item })
                }
                showFavorite={true}
              />
            )}
          />
        </View>
      </ScrollView>

      {/* FOOTER */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* -------------------- MODAL ADD COFFEE -------------------- */}
      <Modal
        visible={showAddModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowAddModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <AddCoffeeForm
              onAddCoffee={handleAddCoffee}
              onClose={() => setShowAddModal(false)}
            />
          </View>
        </View>
      </Modal>

      {/* -------------------- MODAL FILTER -------------------- */}
      <Modal
        visible={showFilterModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowFilterModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.filterCard}>
            <Text style={styles.filterTitle}>Filter by price</Text>

            {['ALL', 'LOW', 'HIGH'].map(option => (
              <TouchableOpacity
                key={option}
                onPress={() =>
                  setPriceFilter(option as 'ALL' | 'LOW' | 'HIGH')
                }
              >
                <Text
                  style={[
                    styles.filterOption,
                    priceFilter === option && styles.activeFilter,
                  ]}
                >
                  {option === 'ALL'
                    ? 'All'
                    : option === 'LOW'
                    ? 'Low price'
                    : 'High price'}
                </Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => setShowFilterModal(false)}
            >
              <Text style={{ color: '#FFF', fontWeight: '600' }}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

// -------------------- STYLES --------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5F0',
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  greeting: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  addCoffeeButton: {
    backgroundColor: '#107523',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  addCoffeeText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginVertical: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  filterCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
  },
  filterOption: {
    fontSize: 16,
    paddingVertical: 10,
    color: '#333',
  },
  activeFilter: {
    color: '#107523',
    fontWeight: '700',
  },
  applyButton: {
    backgroundColor: '#107523',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
});
