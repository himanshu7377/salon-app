import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSendOtpPress = () => {
    // Check if phone number is valid (10 digits)
    if (phone.length === 10) {
      // Send OTP logic (for demonstration purposes, not implemented here)
      console.log('Sending OTP to:', phone);
      // Show OTP input field
      setShowOtpInput(true);
    } else {
      alert('Please enter a valid 10-digit phone number');
    }
  };

  const handleVerifyOtpPress = () => {
    // Verify OTP logic (for demonstration purposes, not implemented here)
    console.log('Verifying OTP:', otp);
    // For now, let's just navigate to the home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input
        placeholder="Mobile Number"
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
      <Button
        title={showOtpInput ? 'Verify OTP' : 'Send OTP'}
        buttonStyle={styles.button}
        onPress={showOtpInput ? handleVerifyOtpPress : handleSendOtpPress}
      />
      <Button
        title="Login with Google"
        buttonStyle={styles.button}
      />
      <Button
        title="Login with uAuth"
        buttonStyle={styles.button}
      />
      <Button
        title="Login with Email/Password"
        buttonStyle={styles.button}
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
    marginBottom: 10,
  },
});

export default LoginScreen;
