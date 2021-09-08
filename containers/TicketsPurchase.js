import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import dogesArr from '../DogesDB';

//route for route parameter because we need them for the correct info along other route components
//navigation to use navigation prop
const TicketPurchase = ({route, navigation}) => {
    //value prop only accepts string, thats why number is in string
    const [ticketQuantity, setTicketQuantity] = useState('1');
    const { tickId } = route.params;
    //find method with the array to return the correct event
    const selectedEvent = dogesArr.find(tickets => tickets.eventId === tickId);

    const purchase = () => {
        var price = selectedEvent.price * ticketQuantity;
        Alert.alert(`Cost is ${price}`);
        navigation.navigate('Home');
    };

    return(
        <View style={styles.container}>
            <Text style={styles.container}>{selectedEvent.event}</Text>
            <Image
                style={styles.ticketimage}
                source={selectedEvent.image}
                />
                <Text style={styles.shortdescription}>{selectedEvent.shortDescription}</Text>
                <Text style={styles.description}>{selectedEvent.description}</Text>
                <View>
                    <Text style={styles.purchaserow}>Quantity: </Text>
                    <TextInput 
                        style={styles.quantityinput}
                        onChangeText={quantity => setTicketQuantity(quantity)}
                        value={ticketQuantity}
                        selectTextOnFocus={true}
                        keyboardType='numeric'
                    />
                </View>
                <Text style={styles.price}>
                    Total Price: ${selectedEvent.price * ticketQuantity}
                </Text>
                <TouchableOpacity
                    onPress={purchase}
                    style={styles.button}
                >
                    <Text syle={styles.buttontext}>BUY NOW</Text>
                </TouchableOpacity>
        </View>
    );
}

const introText = `These dog inspired quotes are a great reminder of how much love and joy our dogs bring to our lives. Here’s 25 sweet & heartwarming dog quotes. I hope you enjoy them as much as I do.`

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 15,
    },
    purchaserow: {
        flexDirection: 'row'
    },
    button: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: '60%'
    },
    title: {
        fontFamily: 'Roboto-Regular',
        paddingBottom: 10
    },
    ticketimage: {
        width: '100%',
        height: 180
    },
    shortdescription: {
        fontFamily: 'Roboto-Regular',
        paddingTop: 50,
        textAlignVertical: 'center'
    },
    description: {
        textAlign: 'left',
        padding: 10,
        fontFamily: 'Roboto-Light',
        fontWeight: '600'
    },
    price: {
        fontFamily: 'Roboto-Regular',
        paddingBottom: 10,
        paddingTop: 5
    },
    buttontext: {
        fontFamily: 'Roboto-Regultar',
        textAlign: 'center',
        padding: 5
    },
    quantityinput: {
        borderWidth: 1,
        fontFamily: 'Roboto-Regular',
        height: 38,
        width: 40,
        marginLeft: 25
    } 
});

export default TicketPurchase;