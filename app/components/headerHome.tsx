import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function HeaderHome() {
  return (
    <View className="my-4 flex-row justify-between">
      <View>
        <Text className="text-white">Hey, Malu</Text>
        <Text className="text-primary">Malucavalcante967 {'>'}</Text>
      </View>
      <View className="flex-row items-center gap-4">
        <View className="h-12 w-12 items-center justify-center rounded-full bg-secondary">
          <Link href="/(tabs)/explore" asChild>
            <Pressable>
              <FontAwesome name="search" size={17} style={{ color: '#fff', padding: 3 }} />
            </Pressable>
          </Link>
        </View>
        <View className="h-12 w-12 rounded-full bg-secondary">
          <Link href="/(tabs)/profile" asChild>
            <FontAwesome name="user" size={24} style={{ color: '#fff', padding: 12 }} />
          </Link>
        </View>
      </View>
    </View>
  );
}
