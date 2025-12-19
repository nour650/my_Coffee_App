import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import CoffeeDetailScreen from "../screens/CoffeeDetailScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";

const PublicStack = createNativeStackNavigator();

function PublicNavigation() {
  return (
    <PublicStack.Navigator
      initialRouteName="Welcome"
//Cache l’en-tête (header) par défaut de React Navigation.
// Pas de barre avec le titre
// Pas de bouton retour automatique
      screenOptions={{ headerShown: false }}
    >
      <PublicStack.Screen name="Welcome" component={WelcomeScreen} />
      <PublicStack.Screen name="Login" component={LoginScreen} />

      {/* Home avec Footer */}
      <PublicStack.Screen name="Home" component={HomeScreen} />

      {/* Détails café */}
      <PublicStack.Screen
        name="CoffeeDetail"
        component={CoffeeDetailScreen}
      />

      {/* Autres écrans */}
      <PublicStack.Screen
        name="Favorite"
        component={FavoriteScreen}
      />
      <PublicStack.Screen
        name="Cart"
        component={CartScreen}
      />
      <PublicStack.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </PublicStack.Navigator>
  );
}

export default PublicNavigation;
