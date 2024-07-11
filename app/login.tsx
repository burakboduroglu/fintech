import {
    View, Text, StyleSheet,
    TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView
} from 'react-native';
import {defaultStyles} from '@/constants/Styles'
import Colors from "@/constants/Colors";
import {useState} from 'react';
import {Ionicons} from "@expo/vector-icons";


enum SignInType {
    Phone, Email, Google, Apple
}

const Page = () => {
    const [countryCode, setCountryCode] = useState('+90')
    const [phoneNumber, setPhoneNumber] = useState('')
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 50 : 0

    const onSignIn = async (type: SignInType) => {
        if (type === SignInType.Phone) {

        }
    }

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}>
            <ScrollView style={defaultStyles.container}>
                <Text style={defaultStyles.header}>Welcome back</Text>
                <Text style={defaultStyles.descriptionText}>
                    Enter your phone number associated with your account.
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Country code"
                        placeholderTextColor={Colors.gray}
                        value={countryCode}
                        onChangeText={setCountryCode}
                        keyboardType="phone-pad"
                    />
                    <TextInput
                        style={[styles.input, {flex: 1}]}
                        placeholder="Mobile number"
                        placeholderTextColor={Colors.gray}
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
                <TouchableOpacity
                    style={[
                        defaultStyles.pillButton,
                        phoneNumber !== '' ? styles.enabled : styles.disabled,
                        {marginBottom: 30}
                    ]}
                    onPress={() => onSignIn(SignInType.Phone)}>
                    <Text style={defaultStyles.buttonText}>
                        Continue
                    </Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                    <View style={{flex: 1, height: 0.5, backgroundColor: Colors.gray}}/>
                    <Text style={{color: Colors.gray, fontSize: 20}}>or</Text>
                    <View style={{flex: 1, height: 0.5, backgroundColor: Colors.gray}}/>
                </View>
                <TouchableOpacity
                    style={[defaultStyles.pillButton, {
                        flexDirection: 'row',
                        gap: 16,
                        marginTop: 20,
                        backgroundColor: '#fff'
                    }]}
                    onPress={() => onSignIn(SignInType.Email)}
                >
                    <Ionicons name="mail" size={24} color={Colors.dark}/>
                    <Text style={[defaultStyles.buttonText, {color: '#000'}]}>Continue with email</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[defaultStyles.pillButton, {
                        flexDirection: 'row',
                        gap: 16,
                        marginTop: 10,
                        backgroundColor: '#fff'
                    }]}
                    onPress={() => onSignIn(SignInType.Google)}
                >
                    <Ionicons name="logo-google" size={24} color={Colors.dark} style={{paddingLeft: 15}}/>
                    <Text style={[defaultStyles.buttonText, {color: '#000'}]}>Continue with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[defaultStyles.pillButton, {
                        flexDirection: 'row',
                        gap: 15,
                        marginTop: 10,
                        backgroundColor: '#fff'
                    }]}
                    onPress={() => onSignIn(SignInType.Google)}
                >
                    <Ionicons name="logo-apple" size={26} color={Colors.dark} style={{paddingLeft: 5}}/>
                    <Text style={[defaultStyles.buttonText, {color: '#000'}]}>Continue with Apple</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Page

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 30,
        flexDirection: 'row'
    },
    input: {
        backgroundColor: Colors.lightGray,
        padding: 20,
        borderRadius: 16,
        fontSize: 16,
        marginRight: 10
    },
    enabled: {
        backgroundColor: Colors.primary
    },
    disabled: {
        backgroundColor: Colors.primaryMuted
    }
});