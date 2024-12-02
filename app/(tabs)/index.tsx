import { Stack } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import HeaderHome from '../components/headerHome';
import Featured from '../components/featured';
import CardMovie from '../components/cardmovie';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className="bg-tertiary p-4" style={{ backgroundColor: '121011' }}>
        <HeaderHome />
        <Featured />
        <Text style={{ marginTop: 84, color: '#FFF' }}>Recommended Movies</Text>
        <ScrollView horizontal style={{ gap: 8 }}>
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
        </ScrollView>
      </View>
    </>
  );
}
