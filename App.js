import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import Home from './home';
import Details from './details';
import { StatusBar } from 'react-native';
import Header from './components/header';
import Search from './search';

export default function App() {

  const { Navigator, Screen } = createNativeStackNavigator();

  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        animation: 'none',
        header: (props) => {
          return <Header {...props} />
        }
      }}>
        <Screen
          name='Home'
          component={Home}
        />
        <Screen
          name='Search'
          component={Search}
        />
        <Screen
          name='Details'
          component={Details}
        />
      </Navigator>
    </NavigationContainer >
  );
}