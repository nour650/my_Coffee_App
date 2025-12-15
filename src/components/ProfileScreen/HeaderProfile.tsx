// src/components/Profile/HeaderProfile.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface HeaderProfileProps {
  name: string;
  location: string;
}

export default function HeaderProfile({ name, location }: HeaderProfileProps) {
  return (
    <View style={styles.headerRow}>
      <Image
        source={require('../../assets/yudi-profile.png')}
        style={styles.profileImage}
      />
      <View style={styles.userInfo}>
        <Text style={styles.greeting}>Good morning, {name}</Text>
        <View style={styles.locationRow}>
          <MaterialIcons name="location-on" size={16} color="#555" />
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.notificationButton}>
        <MaterialIcons name="notifications" size={28} color="#107523" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  profileImage: { width: 70, height: 70, borderRadius: 35, borderWidth: 2, borderColor: '#107523' },
  userInfo: { flex: 1, marginLeft: 15 },
  greeting: { fontSize: 20, fontWeight: '700', color: '#333', marginBottom: 4 },
  locationRow: { flexDirection: 'row', alignItems: 'center' },
  locationText: { marginLeft: 4, fontSize: 14, color: '#555' },
  notificationButton: { padding: 6, borderRadius: 20, backgroundColor: '#E0F2F1' },
});
