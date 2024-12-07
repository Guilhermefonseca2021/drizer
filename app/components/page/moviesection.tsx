import { Pressable, Text, View } from 'react-native';
import useMovieStore from '~/app/contexts/useMovieStore';

export default function MovieSection() {
  const { items } = useMovieStore();

  const movie = items.find((item) => item);

  return (
    <View>
      <View className="flex-row items-center justify-between">
        <Text className="text-white">{movie?.Metascore}</Text>
        <View className="bg-primary text-white">
          <Text className="p-4 font-bold">{movie?.imdbRating}</Text>
        </View>
      </View>
          <View className=''> 
              
      </View>
    </View>
  );
}
