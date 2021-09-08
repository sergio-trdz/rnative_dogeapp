import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet, Alert } from 'react-native';

//navigation prop because this component will be including in routing so it can make use of this prop
const Contact = ({navigation}) => {

    const [formName, setFormName] = useState('Enter Name');
    const [formEmail, setFormEmail] = useState('Enter Email');
    const [formPhoneNumber, setFormPhoneNumber] = useState('Enter Phone Number');
    const [formMessage, setFormMessage] = useState('Whats on your mind');

    const submit = () => {
        if (!formName||!formEmail||!formMessage){
            Alert.alert('enter all dogeinfo');
        } else {
            Alert.alert(`Thanks ${formName}`);
            navigation.navigate('Home')
        }
    }

    return(
        <View style={styles.form}>
            <Text style={styles.labels}>
                Name: *required
            </Text>
            <TextInput 
                style={styles.textinput}
                //onChangeText prop accepts a function and call this function when the content
                //of the input changes
                onChangeText={name => setFormName(name)}
                value={formName}
                //capitalize first letter of every word
                autoCapitalize='words'
                //automatically highlight text when selected
                selectTextOnFocus={true}
            />

            <Text style={styles.labels}>
                Email: *required
            </Text>
            <TextInput 
                style={styles.textinput}
                onChangeText={email => setFormEmail(email)}
                value={formEmail}
                //automatically highlight text when selected
                selectTextOnFocus={true}
            />

            <Text style={styles.labels}>
                Phone:
            </Text>
            <TextInput 
                style={styles.textinput}
                onChangeText={phone => setFormPhoneNumber(phone)}
                value={formPhoneNumber}
                //automatically highlight text when selected
                selectTextOnFocus={true}
            />

            <Text style={styles.labels}>
                Message: *required
            </Text>
            <TextInput 
                style={styles.multitextinput}
                onChangeText={message => setFormMessage(phone)}
                value={formMessage}
                //creates a multiline text input
                multiline={true}
                //how many lines will be displayed
                numberOfLines={3}
                selectTextOnFocus={true}
            />

            <Button 
                title='Contact Us'
                color='#108090'
                onPress={submit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
        flexDirection: 'column',
        padding: 18
    },
    textinput: {
        borderWidth: 1,
        fontFamily: 'Roboto-Regular',
        width: '80%',
        paddingBottom: 15
    },
    multitextinput: {
        borderWidth: 1,
        fontFamily: 'Roboto-Regular',
        width: '90%',
        height: 120,
        marginBottom: 50
    },labels: {
        fontFamily: 'Roboto-Regular',
    }
});

export default Contact;