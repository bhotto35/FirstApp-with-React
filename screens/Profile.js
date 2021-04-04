import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack_ = createStackNavigator();

const ProfileScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Someday, when you are older, you could get hit by a boulder.')}
        />
      </View>
    );
};

const ProfileStackScreen = ({navigation}) =>{
    return(
      <Stack_.Navigator name = "Profile" 
        screenOptions = {{
          headerStyle : { shadowColor : 'violet', shadowOffset:3,backgroundColor:'rgb(249,192,0)'},
          headerTintColor : 'white',
          headerTitleStyle: {fontFamily:'Impact',fontWeight:'bold'}
        }}
        headerMode='float'
        animation = 'fade' 
        >
          
          <Stack_.Screen name = "Profile" options={({route})=>({
            title:'Profile',
            headerLeft : ()=>(
              <Icon.Button name = "list" backgroundColor="rgb(255,207,40)" color="white"
              onPress = {()=>{navigation.openDrawer()}} />
            )
          })} component = {ProfileScreen}/>
        </Stack_.Navigator>
    );
  }

export default ProfileStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});