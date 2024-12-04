import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function Mylist() {
  return (
    <>
      <Stack.Screen options={{ title: 'My List' }} />
      <View>
      </View>
    </>
  );
}
