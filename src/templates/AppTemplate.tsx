// src/templates/AppTemplate.tsx
import type { PropsWithChildren } from 'react';
import React from 'react';
import { StatusBar, useColorScheme, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ScreenTemplate from './ScreenTemplate';

export default function AppTemplate(props: PropsWithChildren) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      {/* StatusBar configurable selon le mode sombre */}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000' : '#fff'}
      />

      {/* Fond global pour gérer le mode sombre */}
      <View
        style={[
          styles.container,
          { backgroundColor: isDarkMode ? '#000' : '#fff' },
        ]}
      >
        <ScreenTemplate>{props.children}</ScreenTemplate>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
