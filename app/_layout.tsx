// import { Stack, useRouter, useSegments } from 'expo-router';
// import { useEffect, useState } from 'react';

// export default function RootLayout() {
//   const router = useRouter();
//   const segments = useSegments(); 
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       if (segments[0] !== 'auth') {
//         router.replace('/auth/login');
//       }
//     }
//   }, [isAuthenticated, segments, router]);

//   return (
//     <Stack>
//       <Stack.Screen name="auth" screenOptions={{ headerShown: false }} />
//       <Stack.Screen name="(tabs)" screenOptions={{ headerShown: false }} />
//     </Stack>
//   );
// }



// // import { Stack } from 'expo-router';

// // export default function RootLayout() {

// //   return (
// //     <Stack>
// //       <Stack.Screen name="(tabs)" screenOptions={{ headerShown: false }} />
// //     </Stack>
// //   );
// // }


import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Stack } from 'expo-router'; // Використовуємо Stack для кореневого лейауту

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Функція для перевірки токена
  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token'); // Отримуємо токен із AsyncStorage
      setIsAuthenticated(!!token); // Якщо токен є, встановлюємо true, якщо немає - false
    } catch (error) {
      console.error('Failed to fetch token', error);
      setIsAuthenticated(false); // Якщо виникла помилка, вважаємо користувача неавторизованим
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  // Показуємо індикатор завантаження, поки не завершено перевірку
  if (isAuthenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Вибір між лейаутами
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="(tabs)/_layout" />
      ) : (
        <Stack.Screen name="auth/_layout" />
      )}
    </Stack>
  );
}
