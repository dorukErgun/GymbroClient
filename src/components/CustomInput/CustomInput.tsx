import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { COLORS } from '../../assets/colors';
import {useForm, Controller, Control} from 'react-hook-form';

interface CustomInputProps {
    name : String,
    placeHolder : string,
    control : Control,
    isRequired : boolean,
    rules : any,
    secureTextEntry? : boolean //'?' mark at the end of the prop indicates that it is optional.
}

const CustomInput = (CustomInputProps: any) => {
    return (         
        <Controller
            control={CustomInputProps.control}
            name={CustomInputProps.name}
            rules={CustomInputProps.rules}
            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => 
            <>
                <View style={[styles.container, {borderColor: error ? 'red' : COLORS.customInputBorderColor}]}>  
                    <TextInput  value={value} 
                                onChangeText={onChange} 
                                onBlur={onBlur}
                                placeholder={CustomInputProps.placeHolder}
                                style={[styles.input]}
                                secureTextEntry={CustomInputProps.secureTextEntry}
                                ></TextInput>
                </View>
                {error && <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>}
            </>}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.customInputBackgroundColor,       
        width: '100%',
        borderColor : COLORS.customInputBorderColor,
        borderWidth : 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5
    },
    input :{

    }
});

export default CustomInput
