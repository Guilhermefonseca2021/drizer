import { useNavigation } from 'expo-router';
import { Image, View, Text, Button, Alert } from 'react-native';
import { Pressable } from 'react-native-gesture-handler';

export default function Featured() {
  const handlePress = () => {
    Alert.alert('Custom Button Pressed', 'You pressed the custom button!');
  };

  return (
    <View>
      <View>
        <Image
          className="overflow-hidden rounded-3xl"
          source={{
            uri: 'https://tse2.mm.bing.net/th?id=OIP.rI9YJxWtLbLuePA7rA-cTAHaDt&pid=Api&P=0&h=180',
          }}
          style={{ width: 'auto', height: 220 }}
        />
        <View className="absolute w-full items-center rounded-3xl">
          <View className="h-22 my-56 w-4/5 justify-center rounded-lg bg-secondary p-4">
            <Text className="text-xl font-bold text-white">Trending</Text>
            <View className="flex-row justify-between">
              <View>
                <Text className="text-primary">
                  A. <Text className="text-white">Evil dead</Text>
                </Text>
                <Text className="text-white">Hornor</Text>
              </View>
              <View>
                <Text className="text-white">Book</Text>
                <Text className="text-white">2D.3D.4D</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
