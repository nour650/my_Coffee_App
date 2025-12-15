// OptionSelector.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function OptionSelector({ label, options, selected, onSelect }: any) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.optionContainer}>
        {options.map((opt: string) => (
          <TouchableOpacity
            key={opt}
            style={[styles.option, selected === opt && styles.selectedOption]}
            onPress={() => onSelect(opt)}
          >
            <Text style={selected === opt ? styles.selectedText : styles.optionText}>
              {opt}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontWeight: '600', fontSize: 16, marginVertical: 10 },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 348,
    height: 32,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 30,
    paddingHorizontal: 5,
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    marginHorizontal: 5,
    height: '100%',
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  selectedOption: {
    backgroundColor: '#107523',
  },
  optionText: { color: '#555', fontWeight: '500' },
  selectedText: { color: '#FFF', fontWeight: '600' },
});
