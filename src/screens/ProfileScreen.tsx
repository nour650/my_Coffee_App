// src/screens/ProfileScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';
import Footer from '../components/Home/Footer';
import HeaderProfile from '../components/ProfileScreen/HeaderProfile';
import ProfileOption from '../components/ProfileScreen/ProfileOption';
import EditProfileModal from '../components/ProfileScreen/EditProfile';

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('Profile');
  const [loggedOut, setLoggedOut] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  // Exemple de données utilisateur
  const [user, setUser] = useState({
    name: 'Yudi',
    email: 'yudi@mail.com',
    location: 'Jakarta, Indonesia',
  });

  const handleSave = () => {
    Alert.alert('Succès', 'Profil mis à jour !');
  };

  if (loggedOut) {
    return (
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.centered}>
          <Text style={styles.logoutText}>You are logged out!</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderProfile name={user.name} location={user.location} />

      <View style={styles.profileSection}>
        <ProfileOption icon="person" label="My Profile" onPress={() => setShowEdit(true)} />
        <ProfileOption icon="logout" label="Logout" color="#FF4D4D" onPress={() => setLoggedOut(true)} />
      </View>

      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />



<EditProfileModal
  visible={showEdit}
  user={user}
  onSave={(updatedUser) => {
    setUser(updatedUser);
    handleSave();
  }}
  onClose={() => setShowEdit(false)}
/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F5F0', paddingHorizontal: 20, paddingTop: 20 },
  profileSection: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    marginTop: 20,
  },
  background: { flex: 1, width: '100%', height: '100%', opacity: 1 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logoutText: { fontSize: 24, fontWeight: '700', color: '#FFF', textAlign: 'center' },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  modalTitle: { fontSize: 20, fontWeight: '700', marginBottom: 15, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 10,
    marginVertical: 8,
    fontSize: 16,
  },
  
});
