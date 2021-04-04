import React from 'react';
import {Dimensions,TouchableHighlight, Text, View, ScrollView,Image, ImageBackground} from 'react-native';
//import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

//const Stack = createStackNavigator();

const FeedScreen = ({navigation,route})=>{
    return(
    <View style={{
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <Text style={{width:Dimensions.get('window').width,
          flex:1,
          fontSize:20,
          textAlign:'center',
          fontWeight:'bold',
          color:'white',
          paddingTop:15,
          paddingBottom:5,
          textShadowOffset:{width:10,height:10},
          elevation:10,
          backgroundColor:'rgba(50,50,50,1)'}}>
            Feed
      </Text>
      <ImageBackground source={require('../bground_img/hehelol.png')} style={{flex: 14, width:450,resizeMode: "cover"}}>
        <ScrollView>
        <Text style={{color: 'white', fontSize:30,top:20,textShadowOffset: { width: 10, height: 1 },
          //textShadowColor: 'blue',
          //textShadowOpacity: 1,
          elevation: 10,
          opacity:1,
          padding:20,
          borderRadius:15,
          // background color must be set
          backgroundColor : "rgba(150,100,150,0.9)", // invisible color
          alignSelf:'center'}}>Cartoons</Text>
          <Text>{'\n\n\n'}</Text>
          <View style={{width:250,
            padding:20,
            alignSelf:'center',
            backgroundColor:'#eeee',
            shadowOffset:{width:10,height:10},
            elevation:10,
            alignItems:'center'}}>
            <TouchableHighlight onPress={() => alert('He gives you a thumbs up of good will and acceptance')}>
              <Image source={require('../bground_img/nice.png')} style={{width:200,height:220}}/>
            </TouchableHighlight> 
            <Text>{'\n'}Dude Chad</Text>
          </View>
          <Text>{'\n\n\n'}</Text>
          <View style={{width:250,
            padding:20,
            alignSelf:'center',
            backgroundColor:'#eeee',
            shadowOffset:{width:10,height:10},
            elevation:10,
            alignItems:'center'}}>
            <TouchableHighlight onPress={() => alert('He wishes you fortune at the end of your long, wearisome path')}>
              <Image source={require('../bground_img/nice2.png')} style={{width:200,height:220}}/>
            </TouchableHighlight> 
            <Text>{'\n'}Big Brother</Text>
          </View>
          <Text>{'\n\n\n'}</Text>
          <View style={{width:250,
            padding:20,
            alignSelf:'center',
            backgroundColor:'#eeee',
            shadowOffset:{width:10,height:10},
            elevation:10,
            alignItems:'center'}}>
            <TouchableHighlight onPress={() => alert('He knows what you did last Wednesday')}>
              <Image source={require('../bground_img/mocker.png')} style={{width:200,height:220}}/>
            </TouchableHighlight> 
            <Text>{'\n'}The Mocker</Text>
          </View>
          <Text>{'\n\n\n'}</Text>
          <View style={{width:250,
            padding:20,
            alignSelf:'center',
            backgroundColor:'#eeee',
            shadowOffset:{width:10,height:10},
            elevation:10,
            alignItems:'center'}}>
            <TouchableHighlight onPress={() => alert('He sees the good things in tough times')}>
              <Image source={require('../bground_img/pained.png')} style={{width:200,height:220}}/>
            </TouchableHighlight> 
            <Text>{'\n'}John Sedlyf</Text>
          </View>
          <Text>{'\n\n\n'}</Text>
          <View style={{width:250,
            padding:20,
            alignSelf:'center',
            backgroundColor:'#eeee',
            shadowOffset:{width:10,height:10},
            elevation:10,
            alignItems:'center'}}>
            <TouchableHighlight onPress={() => alert("He's done putting up with your sh*t")}>
              <Image source={require('../bground_img/bacchaman.png')} style={{width:200,height:220}}/>
            </TouchableHighlight> 
            <Text>{'\n'}Disappointed Kidman</Text>
          </View>
          </ScrollView>
      </ImageBackground>
    </View>
  )};

  export default FeedScreen;