import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const tasks = [
  { id: 1, name: 'Fix bugs', earnings: 1500, date: '2024-12-01' },
  { id: 2, name: 'Develop feature A', earnings: 2000, date: '2024-12-03' },
  { id: 3, name: 'Code review', earnings: 800, date: '2024-12-05' },
  { id: 4, name: 'Optimize app', earnings: 2500, date: '2024-12-10' },
  { id: 5, name: 'Team meeting', earnings: 0, date: '2024-12-15' },
];

const AllMoneyBill = () => {
  const [totalEarnings, setTotalEarnings] = useState<number>(0); 
  const [maxEarnings, setMaxEarnings] = useState<number>(0); 

  useEffect(() => {
    const total = tasks.reduce((sum, task) => sum + task.earnings, 0);
    setTotalEarnings(total);

    const max = Math.max(...tasks.map(task => task.earnings));
    setMaxEarnings(max);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stats}>
        <Text style={styles.title}>Загальний заробіток за місяць</Text>
        <Text style={styles.statItem}>₴{totalEarnings.toFixed(2)}</Text>
        <Text style={styles.title}>Найбільший заробіток за таску</Text>
        <Text style={styles.statItem}>₴{maxEarnings.toFixed(2)}</Text>
      </View>
    </SafeAreaView>
  );
};

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
    textAlign: 'center',
  },
  stats: {
    backgroundColor: '#e6e6fa',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    elevation: 4,
    marginBottom: 20,
  },
  statItem: {
    fontSize: 18,
    color: '#228B22',
    marginVertical: 10,
    textAlign: 'center',
  },
  tasksList: {
    marginTop: 20,
    width: '100%',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#e6e6fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default AllMoneyBill;
