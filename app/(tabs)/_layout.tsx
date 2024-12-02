import { Tabs } from 'expo-router';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export default function TabLayout() {

  
  return (
    <Tabs
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        headerShown: false, // Esconde o cabeçalho
        tabBarItemStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
          borderRadius: 30, // Arredondamento fixo para todos os itens
        },
        tabBarStyle: {
          backgroundColor: '#ffffff', // Fundo da tab bar
        },
        tabBarLabelStyle: {
          display: 'flex',
          flexDirection: "row",
          marginBottom: 12,
          fontSize: 12,
        },
        tabBarActiveBackgroundColor: '#EB2F3D', // Fundo da aba ativa
        tabBarInactiveBackgroundColor: '#ffffff', // Fundo das abas inativas
        tabBarActiveTintColor: '#000000', // Cor do texto/ícone da aba ativa
        tabBarInactiveTintColor: '#888888', // Cor do texto/ícone das abas inativas
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
        }}
      />
      <Tabs.Screen
        name="mylist"
        options={{
          title: 'My List',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: true, 
        }}
      />
    </Tabs>
  );
}
