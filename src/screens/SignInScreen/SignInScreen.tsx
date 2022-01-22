import React, {useState} from 'react'
import { StyleSheet, View, Text, TextInput, useWindowDimensions } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Button } from 'native-base';
import { COLORS } from '../../assets/colors';
import {useForm, Controller} from 'react-hook-form';

const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const SignInScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {control, handleSubmit, formState: {errors}} = useForm(/*{
        defaultValues:{
            username: 'Default username',
            
        }}*/);

    const onSignInPressed = (data) => {
        console.log(data);
        console.log("Sing in pressed.");
    }

    return (
        <View style={{...styles.container}}>
            <Text>Sign in Screen</Text>
            
            <CustomInput
                name = "email"
                placeHolder = "Email"
                control = {control}
                rules={{
                    required: 'Email is required',
                    pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
                }}
            />
            <CustomInput
                name = "password"
                placeHolder = "Password"
                control = {control}
                rules={{
                    required: 'Password is required',
                    minLength: {
                        value: 6,
                        message: 'Password should be minimum 6 characters long'
                    }}}
                secureTextEntry
            />

            <Button style={styles.signInButton} onPress={handleSubmit(onSignInPressed)}>Sign-In</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 50
    },
    signInButton: {
        backgroundColor: COLORS.customButtonBackgroundColor
    }
});

export default SignInScreen;