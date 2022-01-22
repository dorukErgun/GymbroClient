import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { COLORS } from '../../assets/colors';

interface CustomButtonProps {
    label : string
}

const CustomButton = (CustomButtonProps) => {
    return (
        <View style={styles.container}>
            <Text>{CustomButtonProps.label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {    
        width: '100%',
        paddingHorizontal: 10,
        marginVertical: 5,

        backgroundColor: COLORS.customButtonBackgroundColor,
        color: 'white',

        borderColor : COLORS.customButtonBorderColor,
        borderWidth : 1,
        borderRadius: 5,
        
    },
    input :{

    }
});

export default CustomButton
