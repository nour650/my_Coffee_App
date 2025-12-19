import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LoginFormComponent from '../components/LoginScreen/LoginForm';
import React from 'react';
import { FormData } from '../data/FormData';
import Button from '../components/LoginScreen/Button';

export default function LoginScreen({ navigation }: any) {
  const [formData, setFormData] = React.useState<FormData>({
    email: '',  
    password: '',     
  });

  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      setErrorMessage('Email and password are required');
      return;
    }

    if (formData.email !== 'yudi@gmail.com' || formData.password !== 'Yudi') {
      setErrorMessage('Email or password is incorrect');
      return;
    }

    setErrorMessage('');
    console.log('Logging in with', formData);

    // 🔑 Naviguer vers Home
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Please login to continue</Text>

      <LoginFormComponent formData={formData} setFormData={setFormData} />

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#107523',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});
