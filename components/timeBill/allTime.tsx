import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ReportPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Загальний звіт за місяць</Text>
      <View style={styles.stats}>
        <Text style={styles.statItem}>Активний час: 120 годин</Text>
        <Text style={styles.statItem}>Пасивний час: 60 годин</Text>
        <Text style={styles.statItem}>Кількість виконаних задач: 15</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A0DAD',
    marginBottom: 20,
  },
  stats: {
    backgroundColor: '#e6e6fa',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    elevation: 4,
  },
  statItem: {
    fontSize: 18,
    color: '#228B22',
    marginVertical: 10,
    textAlign: 'center',
  },
});
