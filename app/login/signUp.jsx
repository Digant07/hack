import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { auth } from "../../config/firebaseconfig"; 
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';


export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const OnCreateAccount = () => {
    if (email === '' || password === '') {
      ToastAndroid.show('Please fill all details', ToastAndroid.BOTTOM);
      
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        router.push('/(tabs)/Home');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        if (errorCode === 'auth/email-already-in-use') {
          ToastAndroid.show('Email already in use', ToastAndroid.BOTTOM);
         
        }
        // ..
      });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.textheader}>Create Your Account</Text>
      <Text style={styles.subTextheader}>Join Us Today</Text>
      <View style={{ marginTop: 25 }}>
        <Text>Full Name</Text>
        <TextInput placeholder='Enter your full name' style={styles.input} />
      </View>
      <View style={{ marginTop: 25 }}>
        <Text>Email</Text>
        <TextInput
          placeholder='Enter your email'
          style={styles.input}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      <View style={{ marginTop: 25 }}>
        <Text>Password</Text>
        <TextInput
          placeholder='Enter your password'
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={OnCreateAccount}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/login/signIn')} style={styles.buttonCreate}>
        <Text style={styles.buttontext}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textheader: {
    fontSize: 25,
    fontWeight: '900',
    marginTop: 15,
  },
  subTextheader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#D3D3D3',
  },
  subheader: {
    fontSize: 16,
    marginTop: 5,
    color: '#808080',
  },
  input: {
    height: 40,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#28A745',
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  buttontext: {
    textAlign: 'center',
    color: '#28A745',
    fontWeight: 'bold',
  },
  buttonCreate: {
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 20,
    borderRadius: 5,
    borderColor: '#28A745',
    borderWidth: 1,
  },
});
