import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

interface TimeLogProps {
  taskId: number;
}

const TimeLogger: React.FC<TimeLogProps> = ({ taskId }) => {
  const [activeTime, setActiveTime] = useState('');
  const [passiveTime, setPassiveTime] = useState('');

  const handleSave = () => {
    if (!activeTime && !passiveTime) {
      Alert.alert('Помилка', 'Будь ласка, введіть хоча б один вид часу.');
      return;
    }

    console.log(`Лог часу для таски #${taskId}:`);
    console.log(`Активний час: ${activeTime || '0'} год.`);
    console.log(`Пасивний час: ${passiveTime || '0'} год.`);

    Alert.alert('Успішно', 'Час логовано.');
    setActiveTime('');
    setPassiveTime('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Логування часу</Text>

      <View style={styles.card}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Активний час (години):</Text>
          <TextInput
            style={styles.input}
            placeholder="Введіть активний час"
            keyboardType="numeric"
            value={activeTime}
            onChangeText={setActiveTime}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Пасивний час (години):</Text>
          <TextInput
            style={styles.input}
            placeholder="Введіть пасивний час"
            keyboardType="numeric"
            value={passiveTime}
            onChangeText={setPassiveTime}
          />
        </View>

        <Button title="Зберегти час" onPress={handleSave} color="#6A0DAD" />
      </View>
    </View>
  );
};

export default TimeLogger;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6A0DAD',
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'rgb(216, 180, 226)',
    padding: 15,
    borderRadius: 8,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#6A0DAD',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
});
