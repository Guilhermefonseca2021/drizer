import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export default function HeaderHome() {
  return (
    <View className="my-4 flex-row justify-between">
      <View>
        <Text>Hey, Malu</Text>
        <Text className="text-primary">Malucavalcante967 {'>'}</Text>
      </View>
      <View className="flex-row items-center gap-4">
        <View className="h-12 w-12 items-center justify-center rounded-full bg-secondary">
          <FontAwesome name="search" size={17} style={{ color: '#fff', padding: 3 }} />
        </View>
        <View className="h-12 w-12 rounded-full bg-secondary">
          <FontAwesome name="user" size={24} style={{ color: '#fff', padding: 12 }} />
        </View>
      </View>
    </View>
  );
}
