import { Image, Text, View } from "react-native";

export default function CardMovie() {
  return (
      <View>
          <Image
          className="overflow-hidden rounded-3xl"
          source={{
            uri: 'https://tse2.mm.bing.net/th?id=OIP.rI9YJxWtLbLuePA7rA-cTAHaDt&pid=Api&P=0&h=180',
          }}
          style={{ width: 160, height: 190 }}
        />
          <Text className="font-bold">Flash (2019)</Text>
    </View>
  )
}
