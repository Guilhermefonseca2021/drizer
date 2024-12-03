import { Tabs } from 'expo-router';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export default function TabLayout() {
  const userLoggedIn = false;

  return (
    <Tabs
      screenOptions={({ route }): BottomTabNavigationOptions => ({
          headerShown: false,
          tabBarItemStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
            borderRadius: 25,
            marginInline: 4,
            padding: 22,
          },
          tabBarStyle: {
            backgroundColor: '#121011',
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '900',
            marginLeft: 5,  // Adiciona um espaçamento entre o ícone e o label
          },
          tabBarActiveBackgroundColor: '#EB2F3D', // Fundo da aba ativa
          tabBarInactiveBackgroundColor: '#1E1E1E', // Fundo das abas inativas
          tabBarActiveTintColor: '#1E1E1E', // Cor do texto/ícone da aba ativa
          tabBarInactiveTintColor: '#888888', // Cor do texto/ícone das abas inativas
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'account-circle';
            }
            return (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name="deaf" size={size} color={color} />
                {focused && (
                  <Text style={{ marginLeft: 5, color: color, width: 44 }}>{route.name}</Text>
                )}
              </View>
            );
          },
        })}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarStyle: { height: 0, width: 0, display: 'none' },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="mylist"
        options={{
          title: 'My List',
        }}
      />
    </Tabs>
  );
}
