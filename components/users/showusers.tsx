import { Link } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function UsersScreen() {
  const [users, setUsers] = useState([
    { id: 1, username: 'ivanov', email: 'ivanov@example.com' },
    { id: 2, username: 'petrenko', email: 'petrenko@example.com' },
    { id: 3, username: 'olenko', email: 'olenko@example.com' },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Користувачі</Text>
      {users.map((user) => (
        <Link style={styles.card} key={user.id} href={`users/${user.id}`} asChild >
            <TouchableOpacity style={styles.card}>
               <Text style={styles.cardTitle}>{user.username}</Text>
               <Text style={styles.cardDetail}>ID: {user.id}</Text>
               <Text style={styles.cardDetail}>Email: {user.email}</Text>
            </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff', // Білий фон
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A0DAD', // Фіолетовий
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#228B22', // Зелений
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  cardDetail: {
    fontSize: 16,
    color: '#555555',
  },
});
