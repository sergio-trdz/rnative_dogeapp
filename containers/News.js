import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';

const News = () => {
    const [isLoaded, setDataLoaded] = useState(true);
    const [storyData, setStoryData] = useState();

        const getNews = async () => {
            //attempt to run a block of code and test for any errors
            //useful when accessing remote data since we need to be aware of any error
            //fetchAPI will not alert of any error and only will run quietly
            try {
                //await keyword works with the async function, await tells to pause while waiting for promise resolved
                const response = await axios('https://jsonplaceholder.typicode.com/albums/1/photos');
                //parse the data
                // const stories = await response.json();
                //to update storyData state with the data from all fetch request
                setStoryData(response);
                //indicates data has been loaded successfully
                setDataLoaded(false);
            } catch (error) {
                console.error(error);
            }
        };
        
        //useEffect accepts a function that will run when your component is mounted
        //add empty array as the second argument to useEffect, causes useEffect to run just 1 time
        useEffect (() => {
        getNews();
    },[]);


    //used for flatlist
    //item represents each item in the list
    const newsItem = ({item}) => {
        return (
            <View style={styles.storylist}>
                <Image 
                    style={styles.thumb}
                    source={{ uri: item.url }}
                />
                <Text style={styles.storytext}>{item.title}</Text>
                <Text style={styles.storytext}>{item.url}</Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            {isLoaded ? <ActivityIndicator /> : (
                <FlatList 
                //data props use the array that we imported
                data={storyData.data}
                //renderItem is the component that will be displayed for each item in the list
                renderItem={newsItem}

                //keyEstractor used to extract the unique key for each item in the list
                //keyEstractor expects a stiring
                keyExtractor={(item) => item.title}
            />
            )} 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15
    },
    storylist: {
        paddingBottom: 20
    },
    thumb: {
        height: 100,
        width: '100%'
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

export default News;