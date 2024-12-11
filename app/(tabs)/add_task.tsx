import React, { useState } from 'react';
import { Button, Picker, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddTaskScreen() {
  const [task, setTask] = useState({
    name: '',
    assignee: '',
    price: '',
    deadline: '',
    shortDescription: '',
    fullDescription: '',
    progress: 'прийнято'
  });

  const handleInputChange = (field, value) => {
    setTask((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Task submitted:', task);
    // Add logic to save the task to the database
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Додати нову задачу</Text>
      <TextInput
        style={styles.input}
        placeholder="Назва задачі"
        value={task.name}
        onChangeText={(value) => handleInputChange('name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Виконавець"
        value={task.assignee}
        onChangeText={(value) => handleInputChange('assignee', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ціна"
        value={task.price}
        keyboardType="numeric"
        onChangeText={(value) => handleInputChange('price', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Кінцева дата"
        value={task.deadline}
        onChangeText={(value) => handleInputChange('deadline', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Короткий опис"
        value={task.shortDescription}
        onChangeText={(value) => handleInputChange('shortDescription', value)}
      />
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Повний опис"
        value={task.fullDescription}
        multiline
        onChangeText={(value) => handleInputChange('fullDescription', value)}
      />
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Прогрес:</Text>
        <Picker
          selectedValue={task.progress}
          onValueChange={(value) => handleInputChange('progress', value)}
          style={styles.picker}
          itemStyle={styles.pickerItem} // Додаємо стиль для елементів
        >
          <Picker.Item label="Прийнято" value="прийнято" />
          <Picker.Item label="В процесі" value="в процесі" />
          <Picker.Item label="На паузі" value="на паузі" />
          <Picker.Item label="Здано" value="здано" />
          <Picker.Item label="Виконано" value="виконано" />
        </Picker>
      </View>
      <Button title="Додати задачу" onPress={handleSubmit} color={styles.button.color} />
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
  input: {
    borderWidth: 1,
    borderColor: '#228B22', // Зелений
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  textarea: {
    height: 100,
  },
  pickerContainer: {
    marginVertical: 10,
  },
  pickerLabel: {
    fontSize: 16,
    color: '#6A0DAD', // Фіолетовий
    marginBottom: 5,
  },
  picker: {
    width: '100%', // Обмежуємо ширину списку до контейнера
    borderWidth: 1,
    borderColor: '#228B22', // Зелений
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  pickerItem: {
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    color: '#6A0DAD', // Фіолетовий
  },
});
