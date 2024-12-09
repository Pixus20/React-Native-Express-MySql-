import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments(); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      if (segments[0] !== 'auth') {
        router.replace('/auth/login');
      }
    }
  }, [isAuthenticated, segments, router]);

  return (
    <Stack>
      <Stack.Screen name="auth" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
