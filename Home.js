import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Menu from './Menu';

const Home = (props) => {
    return(
        <View style={styles.container}>
            <Image
                style={styles.dogelogo}
                source={require('./assets/images/doge_logo.png')}
                />
                <Text style={styles.title}>Welcome to DogeMENU</Text>
                <Text style={styles.subtitle}>{props.username}</Text>
                <Image 
                    style={styles.dogefamily}
                    source={require('./assets/images/family_doge.png')}
                />
                <View style={styles.textcontainer}>
                    <Text style={styles.content}>{introText}</Text>
                </View>
                <View style={styles.menu}>
                    <Menu />
                </View>
        </View>
    );
}

const introText = `These dog inspired quotes are a great reminder of how much love and joy our dogs bring to our lives. Here’s 25 sweet & heartwarming dog quotes. I hope you enjoy them as much as I do.`

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 15,
        paddingTop: 15,
        //flex says to container to take all available space
        flex: 1
    },
    textcontainer: {
        textAlign: 'center',
        padding: 20
    },
    dogelogo: {
        height: 190,
        width: 150
    },
    title: {
        fontFamily: 'Roboto-Regular'
    },
    subtitle: {
        paddingTop: 5,
        fontFamily: 'Roboto-Bold'
    },
    content: {
        fontFamily: 'Roboto-Light',
        fontWeight: '300'
    },
    dogefamily: {
        height: 170,
        width: '100%',
    },
    menu: {
        position: 'absolute',
        bottom: 10
    }
    
})

export default Home;