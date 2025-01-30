import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { useRouter } from 'expo-router';



export default function Login() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={require('./../../assets/images/login.png')} style={styles.image} />
      <View style={styles.textBox}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/login/signIn')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Stay Connected, Stay Safe</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcf4fb', // Add background color
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Use 'contain' to ensure the image fits within the margins
  },
  textBox: {
    position: 'absolute',
    bottom: 20, // Adjust this value to position the text box
    left: 20, // Adjust this value to position the text box
    right: 20, // Adjust this value to position the text box
    alignItems: 'center', // Center the content horizontally
  },
  button: {
    backgroundColor: '#fff', // White background for the button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 99, // Border radius of 20
    marginBottom: 28, // Add bottom margin for spacing
    width: '100%', // Set the width to 100%
  },
  buttonText: {
    color: '#06894a', // Black text color
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold', // Bold text
  },
  text: {
    color: '#000', // Black text color
    textAlign: 'center',
    fontWeight: 'bold', // Bold text
    marginBottom: 15,
  },
});
