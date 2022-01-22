import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view'
import SignInScreen from './src/screens/SignInScreen/SignInScreen';

export default function App() {
    return (
        <NativeBaseProvider>
            <SafeAreaProvider>
                <SafeAreaView style={styles.root}>
                    <SignInScreen/>
                </SafeAreaView>
            </SafeAreaProvider>
        </NativeBaseProvider>
    );
}

const styles= StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#F9FBFC'
    }
});
