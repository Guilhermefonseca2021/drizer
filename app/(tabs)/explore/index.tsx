import { Stack } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../../components/searchBar';
import useMovieStore from '../../contexts/useMovieStore';
import CardMovie from '../../components/cardmovie';
import { useEffect, useState } from 'react';
import { MovieItem } from '../../contexts/useMovieStore';
import { Link } from 'expo-router';

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
              <Link
                href={{
                  pathname: '/(tabs)/explore/[id]',
                  params: { id: `${movie.imdbID}` },
                }}
                key={movie.imdbID || index}>
                <CardMovie title={movie.Title} imageUri={movie.Poster} imdbRating={movie.Genre} />
              </Link>
            ))
          ) : (
            <Text className="text-xl text-secondary">No searches yet...</Text>
          )}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'visible',
    gap: 14,
  },
});
