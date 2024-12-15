import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="tasks" options={{ title: 'Список задач' }} />
      <Stack.Screen name="[id]" options={{ title: 'Деталі завдання' }} />
    </Stack>
  );
}
