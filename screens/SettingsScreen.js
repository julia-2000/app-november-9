import { View } from 'react-native'
import React, { useState } from 'react'
import { Surface, Text, Switch, RadioButton } from 'react-native-paper'
import { UseAppStore } from '../store/UseAppStore';


export default function SettingsScreen() {

    // const [isDarkTheme, setIsDarkTheme] = useState(false);
    // const [soundEnabled, setSoundEnabled] = useState(false);
    // const [fontSizeKey, setfontSizeKey] = useState("small");
    const isDarkTheme = UseAppStore((state) => state.isDarkTheme);
    const fontSizeKey = UseAppStore((state) => state.fontSizeKey);
    const isOffline = UseAppStore((state) => state.isOffline);
    const soundEnabled = UseAppStore((state) => state.soundEnabled);

    //
    const toggleTheme = UseAppStore((state) => state.toggleTheme);
    const toggleSound = UseAppStore((state) => state.toggleSound);
    const setfontSize = UseAppStore((state) => state.setFontSize);

    return (
        <Surface style={{ flex: 1, padding: 20, margin: 20 }}>
            <Text>Settings Screen</Text>

            <Surface style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16, borderRadius: 12, marginBottom: 16 }}>
                <Text>
                    Dark Mode: ({isDarkTheme ? "Enabled" : "Disabled"})
                </Text>
                <Switch value={isDarkTheme} onValueChange={toggleTheme} />
            </Surface>

            <Surface elevation={2} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16, borderRadius: 12, marginBottom: 16 }}>
                <Text style={{ padding: 16, borderRadius: 12 }}>Font Size</Text>
                <Text>
                    Sound: ({soundEnabled ? "Enabled" : "Disabled"})
                </Text>
                <Switch value={soundEnabled} onValueChange={toggleSound} />
            </Surface>

            <Surface elevation={2} style={{ padding: 16, borderRadius: 12 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Font Size</Text>
                <RadioButton.Group value={fontSizeKey} onValueChange={(newValue) => setfontSize(newValue)} >
                    <RadioButton.Item label='Small' value='small'></RadioButton.Item>
                    <RadioButton.Item label='Medium' value='medium'></RadioButton.Item>
                    <RadioButton.Item label='Large' value='large'></RadioButton.Item>
                </RadioButton.Group>
            </Surface>
        </Surface>
    )
}