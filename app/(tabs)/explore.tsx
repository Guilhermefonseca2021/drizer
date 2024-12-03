import { Stack } from 'expo-router';
import { View } from 'react-native';
import SearchBar from '../components/searchBar';


export default function Explore() {
  return (
    <>
      <Stack.Screen options={{ title: 'Explore' }} />
      <View className="bg-tertiary p-4 h-full">
        <SearchBar />
      </View>
    </>
  );
}
