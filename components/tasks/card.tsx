import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const TaskCard = () => {
  const tasks = [
    {
      id: 1,
      title: 'Завдання 1',
      price: '$100',
      dueDate: '2024-12-20',
      description: 'Короткий опис задачі 1',
      progress: 'done',
    },
    {
      id: 2,
      title: 'Завдання 2',
      price: '$200',
      dueDate: '2024-12-25',
      description: 'Короткий опис задачі 2',
      progress: 'assigned',
    },
    {
      id: 3,
      title: 'Завдання 3',
      price: '$300',
      dueDate: '2024-12-30',
      description: 'Короткий опис задачі 3',
      progress: 'on hold',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Список Завдань</Text>
      {tasks.map((task) => (
        <Link key={task.id} href={`tasks/${task.id}`} asChild>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>{task.title}</Text>
            <Text style={styles.cardDetail}>Ціна: {task.price}</Text>
            <Text style={styles.cardDetail}>Кінцева дата: {task.dueDate}</Text>
            <Text style={styles.cardDetail}>Опис: {task.description}</Text>
            <Text style={styles.cardDetail}>Прогрес: {task.progress}</Text>
          </TouchableOpacity>
        </Link>
      ))}
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
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#228B22',
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

export default TaskCard;
