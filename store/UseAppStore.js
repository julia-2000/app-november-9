import AsyncStorage from '@react-native-async-storage/async-storage'
import { persist, createJSONStorage } from 'zustand/middleware';
import { create } from 'zustand';


export const UseAppStore = create((set, get) => (
    {
        isDarkTheme: false,
        fontSizeKey: "medium",
        isOffline: false,
        soundEnabled: true,


        toggleTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
        toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
        setIsOffline: () => set((state) => ({ isOffline: !state.isOffline })),
        setFontSize: (fontSizeKey) => set({ fontSizeKey }),


        // data caching state
        events: [],
        isLoadingEvents: false,
        eventError: null,
        lastFetchTimeStamp: null,


        // Sync function which include delay function - set aside
        fetchEvents: async (apiKey) => {

            try {
                const response = await fetch("https://elevate-horizon-connect-api.onrender.com/api/events", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": apiKey,

                    }
                });

                if (!response.ok) {
                    throw new Error(`Server responded with status ${response.status}`)
                }
                const eventsArray = await response.json();

                set({
                    events: eventsArray,
                    isLoadingEvents: false,
                    isOffline: false,
                    eventError: null,

                })

            } catch (error) {

                console.log(error.message);
            }
        }
    }
));