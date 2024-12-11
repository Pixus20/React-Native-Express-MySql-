import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const Account = () => {
  const [birthday, setBirthday] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мій акаунт</Text>
      <Text style={styles.info}>Нікнейм: JohnDoe</Text>
      <Text style={styles.info}>Електронна адреса: johndoe@example.com</Text>

      {/* Поле для введення дати народження */}
      <TextInput
        style={styles.input}
        placeholder="Дата народження"
        value={birthday}
        onChangeText={setBirthday}
        keyboardType="numeric"
        maxLength={10} // Формат: дд/мм/рррр
      />

      {/* Поле для опису про себе */}
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Про себе (макс. 30 слів)"
        value={aboutMe}
        onChangeText={(text) => {
          const words = text.split(' ');
          if (words.length <= 30) {
            setAboutMe(text);
          }
        }}
        multiline
        maxLength={300} // Максимум для 30 слів
      />

      {/* Поле для завантаження фото */}
      <Button title="Завантажити фото" onPress={handleImagePick} color="#6A0DAD" />
      {photo && (
        <Image source={{ uri: photo }} style={styles.photo} />
      )}

      {/* Контейнер для кнопок з відступами */}
      <View style={styles.buttonsContainer}>
        <Button title="Оновити" onPress={() => {}} color="#6A0DAD" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  info: {
    fontSize: 18,
    color: '#228B22', // Зелений
    marginBottom: 10,
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
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
  buttonsContainer: {
    marginTop: 20, // Збільшуємо відступ між кнопками
    marginBottom: 30, // Додаємо відступ внизу
  },
});

export default Account;
