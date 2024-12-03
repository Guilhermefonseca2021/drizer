import { Stack } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import HeaderHome from '../components/headerHome';
import Featured from '../components/featured';
import CardMovie from '../components/cardmovie';

export default function Home() {
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
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
        </ScrollView>
      </View>
    </ScrollView>
  );
}
