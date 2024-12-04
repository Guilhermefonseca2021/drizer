import { Image, Text, View } from "react-native";

type CardProps = {
  imageUri: string;
  title: string;
}

export default function CardMovie({ imageUri, title }: CardProps) {
  return (
      <View className="w-24 mx-2 items-center">
          <Image
          className="overflow-hidden rounded-3xl"
          source={{
            uri: `${imageUri}`,
          }}
          style={{ width: 100, height: 150 }}
        />
      <Text className="font-bold text-white my-1 text-sm w-28">{title}</Text>
    </View>
  )
}
