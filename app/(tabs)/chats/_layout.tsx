import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="chats" options={{ title: 'Список чатів' }} />
      <Stack.Screen name="[id]" options={{ title: 'користувач' }} />
    </Stack>
  );
}
