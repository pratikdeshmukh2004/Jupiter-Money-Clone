import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from "./app/config/colors"
import TabBarIcon from './app/components/TabBarIcon';
import CameraScreen from './app/screens/CameraScreen';
import MoneyScreen from './app/screens/MoneyScreen';
import CardScreen from './app/screens/CardScreen';
import ProScreen from './app/screens/ProScreen';
import HomeScreen from './app/screens/HomeScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { paddingBottom: 10, height: 60 },
          tabBarLabelStyle: { fontWeight: "bold", fontSize: 11 },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.secondary
        }}>
        <Tab.Screen options={{ tabBarIcon: ({ color, size }) => <TabBarIcon color={color} size={size} icon={"earth"} /> }} name="Home" component={HomeScreen} />
        <Tab.Screen options={{ tabBarIcon: ({ color, size }) => <TabBarIcon color={color} size={size} icon={"qrcode-scan"} /> }} name="Scanner" component={CameraScreen} />
        <Tab.Screen options={{ tabBarIcon: ({ color, size }) => <TabBarIcon color={color} size={size} icon={"piggy-bank-outline"} /> }} name="Money" component={MoneyScreen} />
        <Tab.Screen options={{ tabBarIcon: ({ color, size }) => <TabBarIcon color={color} size={size} icon={"smart-card"} /> }} name="Card" component={CardScreen} />
        <Tab.Screen options={{ tabBarIcon: ({ color, size }) => <TabBarIcon color={color} size={size} icon={"check-decagram"} /> }} name="Pro" component={ProScreen} />
        {/* <Tab.Screen name="Settings" component={SettingsStackScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}