import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';
import Colors from "@/constants/Colors";
import {TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export {
    ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });
    useEffect(() => {
        if (error) throw error;
    }, [error]);
    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);
    if (!loaded) {
        return null;
    }

    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="signup" options={{
                title: "",
                headerBackTitle: '',
                headerShadowVisible: false,
                headerStyle: {backgroundColor: Colors.background},
                headerLeft: () => (
                    <TouchableOpacity>
                        <Ionicons name="arrow-back" size={32} color={Colors.dark}/>
                    </TouchableOpacity>
                )
            }}/>
        </Stack>
    )
}

const RootLayoutNav = () => {
    return <InitialLayout/>
}

export default RootLayoutNav;
