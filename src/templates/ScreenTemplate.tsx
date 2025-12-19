import type { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ScreenTemplate(props: PropsWithChildren) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
            <View style={styles.content}>{props.children}</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
  content: {
    flex: 1, // ✅ important pour remplir l’écran
  },
});