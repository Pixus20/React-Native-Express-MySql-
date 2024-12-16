import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

// Дані користувача
const user = {
  id: 1,
  username: 'ivanov',
  email: 'ivanov@example.com',
  birthDate: '1990-05-15', // Дата народження
  description: 'Це опис користувача, який демонструє його навички та досягнення.', // Опис
  photo: 'https://via.placeholder.com/150', // Посилання на фото
};

export default function UserProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: user.photo }} style={styles.photo} />
        <Text style={styles.cardTitle}>{user.username}</Text>
        <Text style={styles.cardDetail}>Email: {user.email}</Text>
        <Text style={styles.cardDetail}>Дата народження: {user.birthDate}</Text>
        <Text style={styles.cardDescription}>{user.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#228B22', // Зелений
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6A0DAD',
    marginBottom: 10,
  },
  cardDetail: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#777777',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
  },
});
