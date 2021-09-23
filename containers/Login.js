import React, {useState} from 'react';
import { createConfig, signIn, signOut, getAccessToken, isAuthenticated } from '@okta/okta-react-native';
import {useNavigation} from '@react-navigation/native';
import { View, Image, Text, TextInput, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const Login = () => {

    const navigation = useNavigation();
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('') 

    const sign = async () => {
        
        const response = await createConfig({
            issuer: "https://dev-86084093.okta.com/oauth2/default", // Optional
            clientId: "0oa1nyu3eoxa8sdSL5d7",
            redirectUri: "com.okta.dev-86084093:/callback",
            endSessionRedirectUri: "com.okta.dev-86084093:/",
            discoveryUri: "https://dev-86084093.okta.com",
            scopes: ["openid", "profile", "offline_access"],
            requireHardwareBackedKeyStore: false, // Optional
            // androidChromeTabColor: "#FF00AA", // Optional
            // browserMatchAll: true, // Optional
            // httpConnectionTimeout: 15, // Optional
            // httpReadTimeout: 10, // Optional
          });
          console.log(response, 'this is the response in LOGIN')

        signIn({ username: username, password: password })
            .then(async token => {
                console.log(token, 'this is the token for authorization in LOGIN')
                navigation.navigate('Home')
                // consume accessToken from token.access_token
            })
            .catch(error => {
                console.log('erorrrrr in LOGIN')
                // { code: "", message: "", detail: { message: "", status: "" } }
                // handle error
        })
    }

    return (
        <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Enter your username."
            //   onChangeText={formikProps.handleChange('prescriptionNumber')}
                onChangeText={setUsername}
                value={username}
            //   value={formikProps.values.prescriptionNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your password."
            //   secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            //   value={formikProps.values.mobileNumber}
            />
            <TouchableOpacity
              onPress={sign}
              style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    input: {
        backgroundColor: 'white',
        color: '#554982',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        height: 50,
        borderWidth: 0.5,
        borderColor: '#1172CD'
    },
    submitButton: {
        backgroundColor: '#0C5497',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 30,
        marginHorizontal: 20,
        marginTop: 20
    },
    submitButtonText: {
        color: 'white'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
    },
})

export default Login;