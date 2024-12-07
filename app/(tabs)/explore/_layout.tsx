import { Stack } from 'expo-router';

export default function ExploreLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="index" options={{ title: 'Explore' }} />
      <Stack.Screen name="[imdbID]" options={{ title: 'Movie Details' }} />
    </Stack>
  );
}
