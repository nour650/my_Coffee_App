import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...(props.style ?? {}),
      }}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: '#107523',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    paddingVertical: 14,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
});
