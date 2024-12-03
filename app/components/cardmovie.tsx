import { Image, Text, View } from "react-native";

export default function CardMovie() {
  return (
      <View className="m-2">
          <Image
          className="overflow-hidden rounded-3xl"
          source={{
            uri: 'https://tse2.mm.bing.net/th?id=OIP.rI9YJxWtLbLuePA7rA-cTAHaDt&pid=Api&P=0&h=180',
          }}
          style={{ width: 140, height: 170 }}
        />
          <Text className="font-bold text-white my-1">Flash (2019)</Text>
    </View>
  )
}
