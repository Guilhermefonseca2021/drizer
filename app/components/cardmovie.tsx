import { Image, Text, View } from 'react-native';

type CardProps = {
  imageUri: string;
  title: string;
  imdbRating: string;
}

export default function CardMovie({ imageUri, title, imdbRating }: CardProps) {
  return (
    <View className="w-24 items-center center relative">
      <Image
        className="overflow-hidden rounded-3xl"
        source={{
          uri: `${imageUri}`,
        }}
        style={{ width: 85, height: 120 }}
      />
      <Text style={{ position: "absolute", marginTop: 92, fontSize: 8.5, color: "#fff", backgroundColor: "#1E1E1E", width: 86.7, height: 30, borderBottomRightRadius: 25, borderBottomLeftRadius: 25, padding: 3.5 }}>
        {title} |{"  "}
        <Text style={{ backgroundColor: "#EB2F3D", fontSize: 8}}>{imdbRating}</Text>
    </Text>
      <View className="sr-only" />
    </View>
  ); 
}
