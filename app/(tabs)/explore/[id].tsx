import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import useMovieStore from "~/app/contexts/useMovieStore";

export default function MovieDetails() {
  const { id } = useLocalSearchParams();
  const stateMovie = useMovieStore();
  
  useEffect(() => {
    stateMovie.fetchItems(`${id}`);
  }, []);

  return (
    <View>
      <Text>Movie ID: {id}</Text>
    </View>
  );
}
