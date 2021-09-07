import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Doges from './Doges';

const Stack = createStackNavigator();

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  // <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

  // <SafeAreaView style={backgroundStyle}>
  // </SafeAreaView>

  return (
    <>
      <StatusBar barStyle={'dark-content'} hidden/>
        <NavigationContainer>
          <Stack.Navigator
            //initialRouteName is the Route loaded when app starts
            initialRouteName='Home'
            //headerMode determines if a header is display within any component in Stack.Navigator as header for all
            options={{
              headerMode: 'screen',
            }}
          >
            <Stack.Screen
              //name identify the route I want to navigate to
              name='Home'
              options={{
                //headerShown: false hidde the header
                headerShown: false
              }}
            >
              {(props) => <Home {...props} username='DogeMASTER' />}
            </Stack.Screen>
            <Stack.Screen
              name='Doges'
              component={Doges}
              options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {fontFamily: 'Roboto-Regular'}
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
};

export default App;
