import { Stack } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import HeaderHome from '../components/headerHome';
import Featured from '../components/featured';
import CardMovie from '../components/cardmovie';
import useMovieStore from '../contexts/useMovieStore';
import { useEffect } from 'react';

export default function Home() {
  const stateMovie = useMovieStore();
  
  useEffect(() => {
    stateMovie.fetchItems();
  }, []);

  console.log('Items in state:', stateMovie.items); // Debug the state

  return (
    <ScrollView className="bg-tertiary p-4">
      <Stack.Screen options={{ title: 'Home' }} />
      <View>
        <HeaderHome />
        <Featured />
        <Text style={{ marginTop: 76, color: '#FFF', fontWeight: 'bold', fontSize: 18 }}>
          Recommended Movies
        </Text>
        <ScrollView horizontal style={{ overflow: 'visible' }}>
          {stateMovie.items.map((movie) => (
            <CardMovie
              key={movie.imdbID} 
              title={movie.Title}
              imageUri={movie.Poster}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
