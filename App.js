import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TextInput, Button, Platform } from 'react-native';
import HomeScreen from './HomeScreen'
//import style from './app.module.css';
//Koitetaan myöhemmin saada css-moduuli toimimaan. Nyt se ei syystä tai toisesta toimi

// Tehdään tämä sovellus niin, että App.js sisältää vain Stack-Navigoinnin
// Komponentit ovat omina js-tiedostoinaan
const Stack = createNativeStackNavigator();

const App = () => {

  return (
//StackNavigoinnin designissa pitää käyttää siihen tehtyjä propseja
    <NavigationContainer>
         <Stack.Navigator  screenOptions={{    
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#2B2E31' },
      }} >
        <Stack.Screen style={style.container}
          name="Home"
          component={HomeScreen}
          options={{title: 'Tervetuloa Ampujan päiväkirjaan.'}}
        />
        <Stack.Screen name="Profiili" component={ProfileScreen} />
        <Stack.Screen name="Aikaisemmat ampumaharjoitukset" component={TrainingSessions} />
        <Stack.Screen name="Lisää uusi harjoitus" component={NewTrainingSession} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};


const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const TrainingSessions = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const NewTrainingSession = ({navigation, route}) => {
  return <Text> {route.params.name} -harjoitus</Text>;
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#61dafb',
  },
});





export default App;