import { View, Text } from 'react-native'
import React from 'react'
import { Surface } from 'react-native-paper'
import { UseAppStore } from '../store/UseAppStore'



export default function HomeScreen() {
    // Import value - another approach 
    // This hook return an object (useState return value!)
    const { isDarkTheme, soundEnabled, fontSizeKey } = UseAppStore();

    return (
        <Surface style={{ flex: 1, padding: 20, margin: 20 }}>
            <Text>Home Screen {isDarkTheme ? "Enabled" : "Disabled"}</Text>
        </Surface>
    )
}