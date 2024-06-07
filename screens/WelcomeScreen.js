import React from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleNextPress = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground 
      source={require('../assets/bg.jpg')} // Replace with your background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Image 
          source={require('../assets/logo2.png')} // Replace with your salon logo image
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Welcome to Your Personal Salon App!</Text>
        <Text style={styles.subtitle}>Where Beauty Meets Convenience</Text>
        <Button title="Get Started" onPress={handleNextPress} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: To add a dark overlay to the background image for readability
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
    resizeMode: 'contain',
    tintColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff', // Adjust color for visibility over background
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd', // Adjust color for visibility over background
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
