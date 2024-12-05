import { Stack } from 'expo-router';

export default function ExploreLayout() {
  return (
    <Stack >
      <Stack.Screen name="index" options={{ headerShown: false, title: 'Explore' }} />
      <Stack.Screen name="[imdbID]" options={{ headerShown: true, title: 'Movie Details' }} />
    </Stack>
  );
}
