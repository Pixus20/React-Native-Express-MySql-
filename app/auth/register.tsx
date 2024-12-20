// import React, { useState } from 'react';
// import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import authApi from '../api/auth.axios';

// export default function RegisterScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [reppassword, setReppassword] = useState('');

//   const handleRegister = async () => {
//     if (password !== reppassword) {
//       Alert.alert('Error', 'Passwords do not match');
//       return;
//     }
//     try {
//       const user = await authApi.registerUser(username, email, password);
//       Alert.alert('Success', `Account created for ${user.username}`);
//     } catch (error: any) {
//       Alert.alert('Error', error);
//     }
//   };

//   return (
//     <ImageBackground
//       source={require('../../assets/images/React_Native_loginBG.jpg')}
//       style={styles.container}
//     >
//       <View style={styles.bg}>
//         <Text style={styles.title}>Register</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Repeat Password"
//           value={reppassword}
//           onChangeText={setReppassword}
//           secureTextEntry
//         />
//         <TouchableOpacity style={styles.button} onPress={handleRegister}>
//           <Text style={styles.buttonText}>Create an account</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: '10%',
//   },
//   bg: {
//     backgroundColor: 'rgba(128, 0, 128, 0.35)',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: 20,
//     borderRadius: 5,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: 'green',
//   },
//   input: {
//     width: '80%',
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     margin: 10,
//   },
//   button: {
//     backgroundColor: 'green',
//     padding: 10,
//     borderRadius: 5,
//     width: '80%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });


import React, { useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import authApi from '../api/auth.axios';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [reppassword, setReppassword] = useState('');

  const handleRegister = async () => {
    if (password !== reppassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    try {
      const user = await authApi.registerUser(username, email, password, ); // Тепер передаємо роль
      Alert.alert('Success', `Account created for ${user.username}`);
    } catch (error: any) {
      Alert.alert('Error', error.message); // Додаємо error.message
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/React_Native_loginBG.jpg')}
      style={styles.container}
    >
      <View style={styles.bg}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Repeat Password"
          value={reppassword}
          onChangeText={setReppassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%',
  },
  bg: {
    backgroundColor: 'rgba(128, 0, 128, 0.35)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 10,
  },
  pickerContainer: {
    width: '80%',
    margin: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
