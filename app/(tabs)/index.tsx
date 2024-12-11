import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Вітаємо, [Ім'я користувача]!</Text>
      <View style={styles.stats}>
        <Text style={styles.statItem}>Задачі: 5 відкритих, 20 завершених</Text>
        <Text style={styles.statItem}>Проекти: 3 активні</Text>
        <Text style={styles.statItem}>Клієнти: 15</Text>
      </View>
      <View style={styles.actions}>
        <Button title="Нова задача" onPress={() => {}} color={styles.button.color} />
        <Button title="Новий проект" onPress={() => {}} color={styles.button.color} />
      </View>
      <View style={styles.recent}>
        <Text style={styles.sectionTitle}>Останні дії</Text>
        <Text style={styles.recentItem}>• Задача "Виправити баг" оновлена</Text>
        <Text style={styles.recentItem}>• Коментар до задачі "Розробка дизайну"</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff', 
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A0DAD', 
    marginBottom: 20,
  },
  stats: {
    marginBottom: 20,
  },
  statItem: {
    fontSize: 16,
    color: '#228B22', 
    marginVertical: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    color: '#6A0DAD', 
  },
  recent: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A0DAD', 
    marginBottom: 10,
  },
  recentItem: {
    fontSize: 16,
    color: '#228B22', 
    marginVertical: 3,
  },
});
