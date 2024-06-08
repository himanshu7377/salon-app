import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSendOtpPress = () => {
    // Simulate sending OTP (in real-world, you would send OTP via SMS or other methods)
    if (phone.length === 10) {
      // Assuming the OTP is sent successfully
      setShowOtpInput(true);
    } else {
      alert('Please enter a valid 10-digit phone number');
    }
  };

  const handleVerifyOtpPress = () => {
    // Handle OTP verification logic here
    console.log('OTP:', otp);
    // Navigate to Home screen after registration
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Input
        placeholder="Name"
        value={name}
        onChangeText={setName}
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        containerStyle={styles.inputContainer}
        keyboardType="phone-pad"
      />
      {showOtpInput && (
        <Input
          placeholder="OTP"
          value={otp}
          onChangeText={setOtp}
          containerStyle={styles.inputContainer}
          keyboardType="numeric"
        />
      )}
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        containerStyle={styles.inputContainer}
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        containerStyle={styles.inputContainer}
        secureTextEntry
      />
      {!showOtpInput ? (
        <Button
          title="Send OTP"
          onPress={handleSendOtpPress}
          buttonStyle={styles.button}
        />
      ) : (
        <Button
          title="Verify OTP"
          onPress={handleVerifyOtpPress}
          buttonStyle={styles.button}
        />
      )}

      <Button
        title="Already have an account? Login"
        type="clear"
        onPress={() => navigation.navigate('Login')}
        buttonStyle={styles.button2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    top: -70,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
    paddingVertical: 10,
    
   
  },
  button2: {
    marginTop: 10,
    alignSelf: 'center',
    color: 'black',
  },
});

export default RegisterScreen;
