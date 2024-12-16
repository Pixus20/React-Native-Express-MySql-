import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Chat {
  id: number;
  username: string;
  photo: string;
}

const chatData: Chat[] = [
  {
    id: 1,
    username: 'ivanov',
    photo: 'https://via.placeholder.com/50',
  },
  {
    id: 2,
    username: 'petrov',
    photo: 'https://via.placeholder.com/50',
  },
  {
    id: 3,
    username: 'sidorov',
    photo: 'https://via.placeholder.com/50',
  },
];

export default function ChatList() {
  const handleChatPress = (username: string) => {
    console.log(`Відкрито чат з: ${username}`);
  };

  const renderItem = ({ item }: { item: Chat }) => (
    <Link key={item.id} href={`chats/${item.id}`} asChild>
      <TouchableOpacity style={styles.card} onPress={() => handleChatPress(item.username)}>
        <Image source={{ uri: item.photo }} style={styles.photo} />
        <View>
          <Text style={styles.cardTitle}>{item.username}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <FlatList
      data={chatData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 0, 
    backgroundColor: '#ffffff',
  },
  card: {
    flex: 1, 
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#228B22',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
});
