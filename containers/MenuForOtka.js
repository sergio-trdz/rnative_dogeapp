/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { createConfig, signIn, signOut, getAccessToken, isAuthenticated, getUser } from '@okta/okta-react-native';
import { useFocusEffect, useIsFocused  } from '@react-navigation/native';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Menu from '../components/Menu';

const Home = () => {
    const navigation = useNavigation();
    const userFirstName = 'Valued Customer';
    const isFocused = useIsFocused();

    const [ isAuth, setIsAuth ] = useState(false)
    const [ user, setUser ] = useState({})

    useEffect(() =>  {
        console.log('renderizaDOO')
        const getAuth = async () => {
            
            try {
                const result = await isAuthenticated();
                console.log(result, 'RESULT ISAUTHENTICATED')
                if ( result.authenticated ) {
                    setIsAuth(true);
                const userData = await getUser();
                setUser(userData)
                    return;
         }
         setIsAuth(false)
            } catch (error) {
                console.log(error, 'ERROOOOOR AUTHENTICATED')
                setIsAuth(false)
            }
        }
        if (isFocused) {
            getAuth()
        }
    }, [isFocused]) //al cambiar esta variable hace useEffect

    return (
        <ScrollView 
            contentContainerStyle={{paddingBottom: Dimensions.get('window').height / 7, justifyContent: 'center', alignItems: 'center'}}
            style={ styles.container }
        >
            <Image 
                style={ styles.brandLogo }
                source={ require('../assets/images/pharmacy-logo2.png') }    
            />

            <View style={ styles.textcontainer }>
                {isAuth ? <Text style={ styles.helloFirstName }>{ `Hello, ${user.name}` }</Text> : <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={null}
                >
                    <Text style={styles.buttontext}>Login</Text>
                </TouchableOpacity>}
            </View>

            <View style={ styles.homeOverview }>
                <View style={ styles.homeOverviewInside }>
                    <Image
                        style={ styles.homeImage }
                        source={ require(`../assets/images/grocery-bag.png`) }
                    />
                    <View style={styles.homeText }>
                        <Text style={ styles.homeSubtext }>Up to $75 off groceries</Text>
                        <Text style={ styles.homeSubtext2 }>Save big on groceries with a new or transferred prescription.</Text>
                        <Text style={ styles.homeSubtext3 }>Learn More</Text>
                    </View>

                </View>
            </View>

            <Menu/>

            <View style={ styles.homeOverview }>
                <View style={ styles.homeOverviewInside2 }>
                    <View style={styles.homeText }>
                        <Text style={ styles.homeSubtext }>10% off a grocery purchase</Text>
                        <Text style={ styles.homeSubtext2 }>10% off a grocery purchase up to $200 with any vaccination.</Text>
                        <Text style={ styles.homeSubtext3 }>Learn More</Text>
                    </View>
                    <Image
                        style={ styles.homeImage2 }
                        source={ require(`../assets/images/bandaid.png`) }
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
    },
    homeOverview: {
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginBottom: '5%'
    },
    homeOverviewInside: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#E5F4FC',
        paddingRight: 10,
        paddingVertical: 20,
        borderRadius: 12,
        marginTop: 0,
        elevation: 0.5,
    },
    homeOverviewInside2: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FAE7E6',
        paddingRight: 10,
        paddingVertical: 20,
        borderRadius: 12,
        marginTop: 0,
        elevation: 0.5,
    },
    homeImage: {
        height: 80,
        width: 80,
        resizeMode: 'contain',
        position: 'relative',
        flex: 1
    },
    homeImage2: {
        height: 75,
        width: 100,
        resizeMode: 'contain',
        position: 'relative',
        flex: 1
    },
    homeText: {
        flex: 1,
        marginLeft: '5%'
    },
    homeSubtext: {
        fontSize: 17,
        color: '#05325B'
    },
    homeSubtext2: {
        fontSize: 11,
        fontWeight: '600',
        color: 'black'
    },
    homeSubtext3: {
        fontSize: 10,
        fontWeight: '700',
        color: '#05325B',
        textDecorationLine: 'underline'
    },
    homeTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textcontainer:{
        flex: 1,
        marginTop: '1%',
        width: '100%',
        paddingHorizontal: '9%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    brandLogo: {
        resizeMode: 'contain',
        width: '60%',
        height: '18%',
        marginTop: '15%'
    },
    title:{
        fontWeight: 'bold',
        fontFamily: 'NunitoSans-Regular',
    },
    subtitle:{
        paddingTop: 20,
	    fontFamily: 'NunitoSans-Regular'    
    },
    helloFirstName: {
        fontFamily: 'NunitoSans-Regular',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0051A1'
    },
});

export default Home;