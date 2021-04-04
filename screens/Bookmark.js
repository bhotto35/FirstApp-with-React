import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack_ = createStackNavigator();

const BookmarkScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Bookmark Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Mmm. Monke.')}
        />
      </View>
    );
};

const BookmarkStackScreen = ({navigation}) =>{
    return(
      <Stack_.Navigator name = "Bookmarks" 
        screenOptions = {{
          headerStyle : { shadowColor : 'violet', shadowOffset:3,backgroundColor:'rgb(69,104,152)'},
          headerTintColor : 'white',
          headerTitleStyle: {fontFamily:'Impact',fontWeight:'bold'}
        }}
        headerMode='float'
        animation = 'fade' 
        >
          
          <Stack_.Screen name = "Bookmarks" options={({route})=>({
            title:'Bookmarks',
            headerLeft : ()=>(
              <Icon.Button name = "list" backgroundColor="rgb(102,137,185)" color="white"
              onPress = {()=>{navigation.openDrawer()}} />
            )
          })} component = {BookmarkScreen}/>
        </Stack_.Navigator>
    );
  }

export default BookmarkStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});