import { View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect } from 'react';
import useMovieStore from '~/app/contexts/useMovieStore';
import MovieSection from '~/app/components/page/moviesection';

export default function MovieDetails() {
  const { id } = useLocalSearchParams();
  const stateMovie = useMovieStore();

  const fetchMovie = useCallback(async () => {
    try {
      if (!stateMovie.items.some((item) => item.imdbID === id)) {
        await stateMovie.fetchItems(`${id}`);
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  }, [id, stateMovie]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  const movie = stateMovie.items.find((item) => item.imdbID === id);

  return (
    <View className="h-full bg-tertiary relative">
      <Image
        className="overflow-visible"
        source={{
          uri: movie?.Poster,
        }}
        style={{ width: '100%', height: 200 }}
      />

      {movie ? (
        <View className="p-4">
          <MovieSection />
          <Text className="my-2 text-2xl text-lg font-bold text-white">{movie.Title}</Text>
          <Text className="my-2 text-justify text-sm text-white">Description: {movie.Plot}</Text>
          <View></View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
