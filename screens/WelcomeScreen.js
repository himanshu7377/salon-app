import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements'; // Importing Button from react-native-elements

const WelcomeScreen = ({ navigation }) => {
  const handleNextPress = () => {
    navigation.navigate('Register');
  };

  return (
   
      <View  style={styles.background} >
        <Image 
          source={require('../assets/logo2.png')} // Replace with your salon logo image
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Welcome to Your Personal Salon App!</Text>
        
        <Button 
          title="Get Started"
          type="solid" // Using solid type for better visibility
          onPress={handleNextPress}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
   
  );
};

// Define the screen options for WelcomeScreen
WelcomeScreen.navigationOptions = {
  headerShown: false, // This hides the header
};



const styles = StyleSheet.create({
  background: {
    
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    
   
    backgroundColor: 'dodgerblue',
    
  },
 
  logo: {
    width: 300,
    height: 300,
    top: -40,
    left: -10,
    
    resizeMode: 'contain',
    tintColor: 'black', // Adjust color for visibility over background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
   top: -20,
    textAlign: 'center',
    color: 'black', // Adjust color for visibility over background
  },
  subtitle: {
    fontSize: 18,
  
    color: 'black', // Adjust color for visibility over background
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 30,
   
  },
  buttonTitle: {
    fontSize: 18,
    color: 'white',
  },
});

export default WelcomeScreen;
