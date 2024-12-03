import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, Text, TextInput, View, ViewBase } from 'react-native';

export default function SearchBar() {
  const [text, onChangeText] = React.useState('');
  const navigation = useNavigation();

  const sendData = () => {
    console.log('Sent data:', text); // Replace with your own logic
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
          className="h-12 w-full flex-1 rounded-full bg-secondary mx-2 text-white"
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View className="my-4">
        <Text className="text-xl font-bold text-white">Recent Search:</Text>
      </View>
    </View>
  );
}
