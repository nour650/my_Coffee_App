import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
  return (
    <View style={styles.headerRow}>
      <Image
        source={require('../../assets/yudi-profile.png')}
        style={styles.profileImage}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.locationRow}>
          <MaterialIcons name="location-on" size={16} color="#555" />
          <Text style={styles.locationText}>Jakarta, Indonesia</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.notificationButton}>
        <MaterialIcons name="notifications" size={28} color="#107523" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  profileImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 ,borderWidth: 2, borderColor: '#107523'},
  locationRow: { flexDirection: 'row', alignItems: 'center' },
  locationText: { marginLeft: 4, color: '#555', fontSize: 14 },
  notificationButton: { padding: 6, borderRadius: 20, backgroundColor: '#E0F2F1' },

});
