import { useNavigation } from 'expo-router';
import { Image, View, Text } from 'react-native';
import { Pressable } from 'react-native-gesture-handler';

export default function Featured() {
  const handlePress = () => {
    console.log('Pressable clicked!');
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
          <View className="my-56 h-28 w-4/5 justify-center rounded-lg bg-secondary">
            <Text className="text-white text-2xl"></Text>
            <View className="p-4">
              <Text className="text-white my-6 font-bold">Trending</Text>
              <Text className="text-white text-2xl">Evil Dead</Text>
              <View className="w-full flex-row items-center justify-between">
                <View>
                  <Text className="text-2xl text-primary">
                    A. <Text className="text-white"> English</Text>
                  </Text>
                </View>
                <View>
                  <Text className="text-white bg-primary p-8">Book</Text>
                  <Text className="text-white text-2xl">2D.3D.4D.</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
