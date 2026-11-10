import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MaterialIcons from "@react-native-vector-icons/material-icons";


const Tab = createBottomTabNavigator();

export default function MainNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name='home' color={color} size={size} /> }} />
            <Tab.Screen name="Events" component={EventsScreen} options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name='event' color={color} size={size} /> }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name='settings' color={color} size={size} /> }} />
        </Tab.Navigator >
    )
}