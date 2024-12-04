import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/searchBar';
import useMovieStore from '../contexts/useMovieStore';
import CardMovie from '../components/cardmovie';
import { useState, useEffect } from 'react';
import { MovieItem } from '../contexts/useMovieStore';

export default function Explore() {
  const { searchedItems, searchMovie } = useMovieStore();
  const [recentSearch, setRecentSearch] = useState<MovieItem[]>([]);

  useEffect(() => {
    setRecentSearch(searchedItems);
  }, []);

  useEffect(() => {
    if (recentSearch.length > 0) {
      searchMovie('');
    } else {
      console.log('Not found');
    }
  }, [recentSearch]);

  return (
    <>
      <Stack.Screen options={{ title: 'Explore' }} />
      <View className="h-full bg-tertiary p-4">
        <SearchBar />
        <ScrollView contentContainerStyle={styles.gridContainer}>
          {searchedItems.length > 0 ? (
            searchedItems.map((movie, index) => (
              <View className='w-2 mr-4 gap-4' key={movie.imdbID || index}>
                <CardMovie imageUri={movie.Poster} title={movie.Title} />
              </View>
            ))
          ) : (
            <View className="my-4 ">
              <Text className="text-xl font-bold text-white">Recent Search:</Text>
              <Text className='text-center text-xl text-secondary'>No searches yet...</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row', // Os itens serão dispostos em linha.
    flexWrap: 'wrap', // Permite que os itens que não cabem na linha sejam movidos para baixo.
    justifyContent: 'space-between', // Espaçamento uniforme entre os itens.
    overflow: "visible",
    gap: 14
  }
});
