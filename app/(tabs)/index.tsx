import { Stack, useNavigation } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import HeaderHome from '../components/headerHome';
import Featured from '../components/featured';
import CardMovie from '../components/cardmovie';
import useMovieStore from '../contexts/useMovieStore';
import { useEffect } from 'react';

export default function Home() {
  const stateMovie = useMovieStore();

  useEffect(() => {
    stateMovie.fetchItems('tt3896198');
  }, []);

  return (
    <ScrollView className="bg-tertiary p-4">
      <Stack.Screen options={{ title: 'Home' }} />
      <View>
        <HeaderHome />
        <Featured />
        <Text style={{ marginTop: 76, color: '#FFF', fontWeight: 'bold', fontSize: 18 }}>
          Recommended Movies
        </Text>
        <ScrollView horizontal style={{ overflow: 'visible', margin: 14 }}>
          {stateMovie.items.map((movie, index) => (
            <Pressable
              onPress={() => console.log(movie.imdbID)}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'lightgray' : 'blue',
                  padding: 10,
                  borderRadius: 5,
                },
              ]}
              key={movie.imdbID || index}>
              <CardMovie title={movie.Title} imageUri={movie.Poster} imdbRating={movie.imdbRating} />
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
