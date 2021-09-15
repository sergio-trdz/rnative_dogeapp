import 'react-native-gesture-handler';
import React from 'react';
import { createConfig, signIn, signOut, getAccessToken } from '@okta/okta-react-native';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Doges from './Doges';
import Contact from './containers/Contact';
import TicketPurchase from './containers/TicketsPurchase';
import News from './containers/News';

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
              //for props to pass down need an opening and closing tags for both sides
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
            <Stack.Screen
              name='Contact'
              component={Contact}
              options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {fontFamily: 'Roboto-Regular'},
                //overwrite the title and displays this
                headerTitle: 'Contact Us for doges'
              }}
            />
            <Stack.Screen
              name='TicketPurchase'
              component={TicketPurchase}
              options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {fontFamily: 'Roboto-Regular'},
                //overwrite the title and displays this
                headerTitle: 'Purchase DogeHearts'
              }}
            />
            <Stack.Screen
              name='News'
              component={News}
              options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {fontFamily: 'Roboto-Regular'},
                //overwrite the title and displays this
                headerTitle: 'Latest Dogenews'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
};

export default App;
