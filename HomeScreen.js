
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text, View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function HomeScreen ({navigation}) {

  const AppButton = ({ onPress, icon, title, backgroundColor, navigate_here }) => (
    <View style={styles.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor={backgroundColor}
        onPress={() =>
          navigation.navigate(navigate_here, {name: 'MPK'})}
        style={styles.appButton}
      >
        <Text style={styles.appButtonText}>{title}</Text>
  
      </Icon.Button>
    </View>
  );


  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 80,
      backgroundColor: "#777",
    },
    appButton: {
      padding: 12,
    },
    appButtonText: {
      fontSize: 17,
    },
    appButtonContainer: {
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
  });




  return (
<View>

<AppButton
      icon="sign-in"
      title="Omia tietojasi"    
      navigate_here = "Aikaisemmat ampumaharjoitukset" 
      backgroundColor="#777"
       />

     <AppButton
      title="Aikaisemmat ampumaharjoitukset"   
      navigate_here = "Aikaisemmat ampumaharjoitukset"  
       />

      <AppButton
      title="Lisää uusi ampumaharjoitus"
      navigate_here = "Lisää uusi harjoitus"  
     />




{/*  Esimerkkinä miten lähetetään propsi
<Button
      title="Lisää uusi ampumaharjoitus"
      onPress={() =>
        navigation.navigate('Lisää uusi harjoitus', {name: 'MPK'})
      } />

 */}




 </View>
      );

      
};


