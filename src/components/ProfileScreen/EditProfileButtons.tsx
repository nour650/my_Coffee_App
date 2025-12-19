// src/components/ProfileScreen/EditProfileButtons.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface EditProfileButtonsProps {
  onSave: () => void;
  onCancel: () => void;
}

export default function EditProfileButtons({ onSave, onCancel }: EditProfileButtonsProps) {
  return (
    <View style={styles.modalButtons}>
      <TouchableOpacity style={styles.saveButton} onPress={onSave}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modalButtons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  saveButton: { flex: 1, backgroundColor: '#107523', padding: 12, borderRadius: 12, alignItems: 'center', marginRight: 10 },
  saveText: { color: '#FFF', fontWeight: '700', fontSize: 16 },
  cancelButton: { flex: 1, backgroundColor: '#FF4D4D', padding: 12, borderRadius: 12, alignItems: 'center' },
  cancelText: { color: '#FFF', fontWeight: '700', fontSize: 16 },
});
