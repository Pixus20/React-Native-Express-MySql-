import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="users" options={{ title: 'Список користувачів' }} />
      <Stack.Screen name="[id]" options={{ title: 'Детальна інфорація' }} />
    </Stack>
  );
}
