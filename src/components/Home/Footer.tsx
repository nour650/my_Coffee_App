import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

interface FooterProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Footer({ activeTab, setActiveTab }: FooterProps) {
  const navigation = useNavigation<any>();

  const tabs = [
    { key: 'Home', icon: 'home', route: 'Home' },
    { key: 'Favorite', icon: 'favorite', route: 'Favorite' },
    { key: 'Cart', icon: 'shopping-cart', route: 'Cart' },
    { key: 'Profile', icon: 'person', route: 'Profile' },
  ];

  return (
    <View style={styles.footer}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.key}
          onPress={() => {
            setActiveTab(tab.key);
            navigation.navigate(tab.route); // ✅ navigation réelle
          }}
        >
          <MaterialIcons
            name={tab.icon}
            size={28}
            color={activeTab === tab.key ? '#107523' : '#999'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,      // ajoute cette ligne
  height: 70,
  backgroundColor: '#FFF',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  elevation: 10,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: -3 },
}

});
