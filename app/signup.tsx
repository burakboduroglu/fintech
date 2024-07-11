import {View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import {defaultStyles} from '../constants/Styles'
import Colors from "@/constants/Colors";
import {useState} from 'react';
import {Link} from "expo-router";

const Page = () => {
    const [countryCode, setCountryCode] = useState('+90')
    const [phoneNumber, setPhoneNumber] = useState('')
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 50 : 0

    const onSignup = () => {
    }

    return (
        <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}>
            <View style={defaultStyles.container}>
                <Text style={defaultStyles.header}>Let's get started!</Text>
                <Text style={defaultStyles.descriptionText}>
                    Enter your phone number. We will send you a confirmation code there.
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
                <Link href={'/login'} replace asChild>
                    <TouchableOpacity>
                        <Text style={defaultStyles.textLink}>Already have an account?</Text>
                    </TouchableOpacity>
                </Link>
                <View style={{flex: 1}}/>
                <TouchableOpacity
                    style={[
                        defaultStyles.pillButton,
                        phoneNumber !== '' ? styles.enabled : styles.disabled,
                        { marginBottom: 30}
                    ]}
                    onPress={onSignup}>
                    <Text style={defaultStyles.buttonText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
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