import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const TaskDetail = () => {
  const { id } = useLocalSearchParams();

  const task = {
    id,
    title: 'Завдання 1',
    price: '$100',
    dueDate: '2024-12-20',
    description: 'Короткий опис задачі 1',
    fullDescription: 'Детальний опис задачі...',
    progress: 'done',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <View style={styles.card}>
        <Text style={styles.cardDetail}>ID завдання: {task.id}</Text>
        <Text style={styles.cardDetail}>Ціна: {task.price}</Text>
        <Text style={styles.cardDetail}>Кінцева дата: {task.dueDate}</Text>
        <Text style={styles.cardDetail}>Короткий опис: {task.description}</Text>
        <Text style={styles.cardDetail}>Повний опис: {task.fullDescription}</Text>
        <Text style={styles.cardDetail}>Прогрес: {task.progress}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A0DAD',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'rgb(216, 180, 226)',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardDetail: {
    fontSize: 16,
    color: 'green',
    marginBottom: 10,
  },
});

export default TaskDetail;
