import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Footer from '../components/Home/Footer';
import HeaderProfile from '../components/ProfileScreen/HeaderProfile';
import ProfileOption from '../components/ProfileScreen/ProfileOption';


export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('Profile');
  const [loggedOut, setLoggedOut] = useState(false);

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
      <HeaderProfile name="Yudi" location="Jakarta, Indonesia" />

      <View style={styles.profileSection}>
        <ProfileOption icon="person" label="My Profile" onPress={() => console.log('My Profile')} />
     
        <ProfileOption icon="logout" label="Logout" color="#FF4D4D" onPress={() => setLoggedOut(true)} />
      </View>

      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F5F0', paddingHorizontal: 20, paddingTop: 20 },
  profileSection: { backgroundColor: '#FFF', borderRadius: 20, paddingVertical: 10, paddingHorizontal: 15, shadowColor: '#000', shadowOpacity: 0.05, shadowOffset: { width: 0, height: 2 }, shadowRadius: 5, elevation: 3 },
  background: { flex: 1, width: '100%', height: '100%', opacity: 1 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logoutText: { fontSize: 24, fontWeight: '700', color: '#FFF', textAlign: 'center' },
});
