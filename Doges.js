import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import dogesArr from './DogesDB';

const Doges = ({navigation}) => {

    //used for flatlist
    //item represents each item in the list
    const dogeItem = ({item}) => {

        return (
            <View style={styles.tickets}>
                <View>
                    <Image
                        style={styles.img}
                        source={item.image}
                    />
                </View>
                <View>
                    <Text style={styles.tickettitle}>
                        {item.event}
                    </Text>
                    <Text style={styles.ticketshortdescription}>
                        {item.shortDescription}
                    </Text>
                    <Text
                        style={styles.ticketdescription}
                        //numberOfLines indicates how many line of text are display
                        numberOfLines={2}
                        ellipsizeMode='tail'
                    >
                        {item.description}
                    </Text>
                    <Text style={styles.ticketshortdescription}>
                        {item.price}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('TicketPurchase', {tickId: item.eventId})
                        }}
                    >
                        <Text style={styles.ticketbutton}>GET TICKETS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    return(
        <View style={styles.container}>
            <FlatList 
                //data props use the array that we imported
                data={dogesArr}
                //renderItem is the component that will be displayed for each item in the list
                renderItem={dogeItem}
                //keyEstractor used to extract the unique key for each item in the list
                keyExtractor={(item) => item.eventId}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15
    },
    tickets: {
        flexDirection: 'column'
    },
    img: {
        height: 180,
        width: '100%'
    },
    tickettitle: {
        fontFamily: 'Roboto-Bold',
        textAlign: 'center'
    },
    ticketshortdescription: {
        fontFamily: 'Roboto-Regular',
        textAlign: 'center',
        paddingTop: 5
    },
    ticketdescription: {
        fontFamily: 'Roboto-Light',
        padding: 15
    },
    ticketbutton: {
        fontFamily: 'Roboto-Regular',
        textAlign: 'center',
        paddingBottom: 15,
        paddingTop: 5
    }
});

export default Doges;