import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import GetStartedButton from '../components/GetStartedButton';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>
          Coffee so good,{'\n'}
          your taste buds{'\n'}
          will love it
        </Text>

        <Text style={styles.subtitle}>
          The best grain, the finest roast,{'\n'}
          the most powerful flavor.
        </Text>

        <View style={styles.dots} />

        {/* Utilisation du composant bouton */}
        <GetStartedButton onPress={() => navigation.navigate('Login')} />
      </View>
    </ImageBackground>
  );
}

// ... styles identiques à avant


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
    alignItems: 'center', // ✅ centre horizontalement les enfants
    padding: 30,
  },
  logo: {
    width: 200,
    height: 250,
    marginBottom: 30,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center', // ✅ centre le texte
  },
  subtitle: {
    color: '#ddd',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 30,
    textAlign: 'center', // ✅ centre le texte
  },
  // ✅ Ajout de la propriété "dots" pour les petits points
  dots: {
    width: 44,
    height: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    marginTop: 20,
  },
  
});

