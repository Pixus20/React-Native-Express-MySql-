import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

interface Message {
  id: number;
  text: string;
  time: string;
  isMine: boolean; 
  userPhoto?: string; 
}

const messages: Message[] = [
  {
    id: 1,
    text: 'Привіт! Як справи?',
    time: '10:30',
    isMine: false,
    userPhoto: 'https://via.placeholder.com/40',
  },
  {
    id: 2,
    text: 'Все добре! А ти як?',
    time: '10:32',
    isMine: true,
  },
  {
    id: 3,
    text: 'Чудово! Дякую за запитання.',
    time: '10:35',
    isMine: false,
    userPhoto: 'https://via.placeholder.com/40',
  },
];

export default function ChatMessages() {
  const renderItem = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageContainer,
        item.isMine ? styles.myMessageContainer : styles.theirMessageContainer,
      ]}
    >
      {!item.isMine && item.userPhoto && (
        <Image source={{ uri: item.userPhoto }} style={styles.userPhoto} />
      )}
      <View
        style={[
          styles.messageBubble,
          item.isMine ? styles.myMessageBubble : styles.theirMessageBubble,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  myMessageContainer: {
    justifyContent: 'flex-end', 
  },
  theirMessageContainer: {
    justifyContent: 'flex-start', 
  },
  messageBubble: {
    maxWidth: '75%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  myMessageBubble: {
    backgroundColor: '#e0f7fa', 
    borderColor: '#228B22', 
  },
  theirMessageBubble: {
    backgroundColor: '#f1f1f1', 
    borderColor: '#cccccc',
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
  messageTime: {
    fontSize: 12,
    color: '#777777',
    textAlign: 'right',
  },
});
