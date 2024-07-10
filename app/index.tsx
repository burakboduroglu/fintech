import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAssets} from "expo-asset";
import {ResizeMode, Video} from "expo-av";
import {Link} from 'expo-router';
import {defaultStyles} from "@/constants/Styles";
import Colors from "@/constants/Colors";

const Page = () => {
    const [assets] = useAssets([require('@/assets/videos/intro.mp4')]);
    return (
        <View style={styles.container}>
            {assets && (
                <Video
                    source={{uri: assets[0].uri}}
                    style={styles.video}
                    resizeMode={ResizeMode.COVER}
                    isMuted
                    isLooping
                    shouldPlay
                />
            )}
            <View style={{padding: 20, marginTop: 80}}>
                <Text style={styles.header}>Ready to change the way you money?</Text>
            </View>
            <View style={styles.buttons}>
                <Link href={'/login'} style={[defaultStyles.pillButton, {flex: 1, backgroundColor: Colors.dark}]}
                      asChild>
                    <TouchableOpacity>
                        <Text style={{color: "white", fontSize: 22, fontWeight: '500'}}>Login</Text>
                    </TouchableOpacity>
                </Link>
                <Link href={'/signup'} style={[defaultStyles.pillButton, {flex: 1, backgroundColor: '#fff'}]}
                      asChild>
                    <TouchableOpacity>
                        <Text style={{fontSize: 22, fontWeight: '500'}}>Sign Up</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    video: {
        height: '100%',
        width: '100%',
        position: "absolute"
    },
    header: {
        fontSize: 36,
        fontWeight: '900',
        textTransform: 'uppercase',
        color: 'white',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 60,
        paddingHorizontal: 20,
    }
})