import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { categories } from '../../data/coffeeData';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface AddCoffeeFormProps {
  onAddCoffee: (coffee: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: any;
    category: string;
  }) => void;
  onClose: () => void; // pour fermer le modal
}

export default function AddCoffeeForm({ onAddCoffee, onClose }: AddCoffeeFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Cappuccino'); // valeur par défaut

  const handleAdd = () => {
    if (!name || !description || !price) return;

    const newCoffee = {
      id: Date.now().toString(),
      name,
      description,
      price: Number(price),
      image: require('../../assets/new-coffee.png'), // image par défaut
      category,
    };

    onAddCoffee(newCoffee);

    // Réinitialiser le formulaire
    setName('');
    setDescription('');
    setPrice('');
    setCategory('Cappuccino');
  };

  return (
    <View style={styles.container}>
      {/* Bouton fermer en haut à droite */}
      <TouchableOpacity style={styles.closeIconButton} onPress={onClose}>
        <MaterialIcons name="close" size={28} color="#fff" />
      </TouchableOpacity>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />

      {/* Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={category} // état actuel
          onValueChange={itemValue => setCategory(itemValue)} // mise à jour
          style={styles.picker}
        >
          {categories
            .filter(cat => cat.key !== 'All')
            .map(cat => (
              <Picker.Item key={cat.key} label={cat.label} value={cat.key} />
            ))}
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add Coffee</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    padding: 15,               // plus d’espace intérieur
    backgroundColor: '#FFF',
    borderRadius: 16,           // coins un peu plus arrondis
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
    minHeight: 340,             // hauteur minimale du formulaire
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 12,                // inputs plus grands
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    marginBottom: 12,
    overflow: 'hidden',
    height: 50,                 // picker plus grand
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#000',
  },
  button: {
    backgroundColor: '#107523',
    padding: 14,                // bouton plus grand
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
  },
  closeIconButton: {
    position: 'absolute',
    top: -25,          // légèrement au-dessus du formulaire
    right: -15,        // légèrement à droite
    backgroundColor: '#107523',
    width: 44,         // cercle légèrement plus grand
    height: 44,
    borderRadius: 22,  // cercle parfait
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 10,
  },
});

