import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View, ViewBase } from 'react-native';
import useMovieStore from '../contexts/useMovieStore';

export default function SearchBar() {
  const [text, onChangeText] = useState('');
  const { searchMovie } = useMovieStore()
  const navigation = useNavigation();

  const handleSearch = () => {
    searchMovie(text)
  };

  return (
    <View>
      <View className="my-4 flex-row items-center justify-between">
        <View className="h-12 w-12 items-center justify-center rounded-full bg-secondary">
          <Pressable className="text-secondary" onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-left" size={20} color="#fff" />
          </Pressable>
        </View>
        <TextInput
          className="mx-2 h-12 w-full flex-1 rounded-full bg-secondary p-4 text-white"
          onChangeText={onChangeText}
          value={text}
          placeholder="Search..."
          placeholderTextColor="#ccc"
          onSubmitEditing={handleSearch}
        />
      </View>
    </View>
  );
}
