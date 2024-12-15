import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput } from 'react-native';

const AddComment = ({ onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (comment.trim()) {
      onAddComment(comment);
      setComment(''); 
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Додати коментар</Text>
      <TextInput
        style={styles.input}
        placeholder="Введіть коментар"
        value={comment}
        onChangeText={setComment}
      />
      <Button title="Додати" onPress={handleAddComment} color="#6A0DAD" />
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
  input: {
    borderWidth: 1,
    borderColor: '#228B22',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#6A0DAD',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
  },
});

export default AddComment;
