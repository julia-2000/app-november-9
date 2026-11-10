import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Surface } from 'react-native-paper'
import { UseAppStore } from '../store/UseAppStore'
import { ScrollView } from 'react-native'


export default function EventsScreen() {


    const fetchEvents = UseAppStore((state) => state.fetchEvents);
    const events = UseAppStore((state) => state.events);
    useEffect(() => {
        fetchEvents("student_secret_render_888")
    }, []);

    return (

        <Surface style={{ flex: 1, padding: 20, margin: 20 }}>
            <Text>Events Screen</Text>


            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 24 }}>
                {events.map((item) => {
                    return (
                        <Text key={item.id}>
                            {item.title}
                        </Text>)
                })}
            </ScrollView>
        </Surface>
    )
}