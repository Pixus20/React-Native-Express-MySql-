import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ShowComment = ({ commentData }) => {
  const { author, date, comment } = commentData;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Коментар</Text>
      <View style={styles.commentContainer}>
        <Text style={styles.author}>Автор: {author}</Text>
        <Text style={styles.date}>Дата: {date}</Text>
        <Text style={styles.comment}>{comment}</Text>
      </View>
    </View>
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
  commentContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#228B22',
  },
  author: {
    fontSize: 16,
    color: '#6A0DAD',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  comment: {
    fontSize: 16,
    color: '#333',
  },
});

export default ShowComment;
