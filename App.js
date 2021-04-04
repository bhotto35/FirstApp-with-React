
import React from 'react';
import {StyleSheet,Dimensions,TouchableHighlight, Text, View, ScrollView, Button, Image, ImageBackground, Easing} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer as DW, Text as TextD, TouchableRipple, Switch} from 'react-native-paper';
import {NavigationContainer, useIsFocused,getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator,TransitionPresets,CardStyleInterpolators} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import Icon from 'react-native-ionicons';
//import find from './icons/find.png';
import Icon from 'react-native-vector-icons/FontAwesome';
//import {Ionicons} from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();//createBottomTabNavigator();
const HomeStack = createStackNavigator();
//const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

//--FIRST FUNCTION THAT DOESN'T UPDATE TITLE-----//
const HomeScreen = ({navigation}) =>{
  /*navigation.setOptions({
    headerRight: ()=> (
    <Button
      title = "Save"
      onPress = {() =>{navigation.replace('Home')}}
    />)
  });*/
  return (<View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgb(52,50,70)'
  }} >
    <Text style={{color: 'lawngreen', fontFamily: "Arial",fontSize: 24}}>Home Screen {"\n"}</Text>
  <Button title="Go to Details screen" 
  color = 'orange'
  onPress={()=>navigation.navigate('Details')}/>
  
  </View>);
}
/*<Button title = "Save" onPress = {() =>{navigation.replace('Home')}}/>*/

//-----FOR AUTO UPDATE OF TITLE-----//
/*const HomeScreen = ({navigation}) =>(
  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }}><Text style={{color: 'green', fontSize: 24}}>Home Screen</Text>
  <Button title="Go to Settings screen" onPress={()=>navigation.setOptions({title: 'My Home Screen'})}/>
  </View>
)*/

const HomeStackScreen = ({navigation}) =>{
  return(
    <Stack.Navigator name = "Home" 
      screenOptions = {{
        headerStyle : { backgroundColor:'darkblue'},
        headerTintColor : 'white',
        headerTitleStyle: {fontFamily:'Baskerville Old Face',
          fontWeight:'bold',
          alignSelf:'flex-start',
          }
      }}
      headerMode='float'
      animation = 'fade' >
        
        <Stack.Screen name = "Home" options={({route})=>({
          title:'Home',
          headerLeft : ()=>(
            <Icon.Button name = "list" backgroundColor="blue" color="white"
            onPress = {()=>{navigation.openDrawer()}} />
          ),
        })} 
        component = {HomeScreen}/>
      </Stack.Navigator>
  );
}

const DetailsStackScreen = ({navigation}) =>{
  return(
    <Stack.Navigator name = "Details" 
      screenOptions = {{
        headerStyle : { shadowColor : 'violet', shadowOffset:3,backgroundColor:'darkgreen'},
        headerTintColor : 'white',
        headerTitleStyle: {fontFamily:'Impact',fontWeight:'bold'}
      }}
      headerMode='float'
      animation = 'fade' 
      >
        
        <Stack.Screen name = "Details" options={({route})=>({
          title:'More on This',
          headerLeft : ()=>(
            <Icon.Button name = "list" backgroundColor="green" color="white"
            onPress = {()=>{navigation.openDrawer()}} />
          )
        })} 
        component = {DetailsScreen}/>
      </Stack.Navigator>
  );
}

const SettingsScreen = ({navigation}) =>{
  const isFocused = useIsFocused();

  return (<View style={{
    flex: 1,
    justifyContent: "center",
    backgroundColor:'purple',
    alignItems: "center"
  }}><Text style={{color: isFocused? 'grey': 'green', fontSize: 24}}>Settings</Text>
  <Text style={{color:'white'}}>{'\n'} Yet to be thought of {'\n'} </Text>
  <Button title="Go Back" onPress={()=>navigation.goBack()}/>
  </View>
);}

const DetailsScreen = (props)=>
(
  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }}><Text style={{color: 'darkblue', fontSize: 24}}>
    Details
    {"\n"}
  </Text>
  <Text style = {{flex:0, flexDirection:'row'}}>
    {'\u2022'} This ain't much 
    {"\n"}
    {'\u2022'} But it is honest work
  </Text>
  </View>
)

const HomeStackNavigator = ({navigation,route})=>{
  /*if(route.state)
  {
    navigation.setOptions({
      tabBarVisible: route.state.index>0?true:false
    })
  }*/
  return(
    <HomeStack.Navigator /*screenOptions = {{headerShown: false}}/* not needed, as shouldHeaderBeShown already defined*/>
      <HomeStack.Screen name = "Home" component={HomeScreen}/>
      <HomeStack.Screen name = "Details" component={DetailsScreen}/>
    </HomeStack.Navigator>
  );
};

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
    <ImageBackground source={require('./bground_img/hehelol.png')} style={{flex: 14, width:450,resizeMode: "cover"}}>
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
            <Image source={require('./bground_img/nice.png')} style={{width:200,height:220}}/>
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
            <Image source={require('./bground_img/nice2.png')} style={{width:200,height:220}}/>
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
            <Image source={require('./bground_img/mocker.png')} style={{width:200,height:220}}/>
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
            <Image source={require('./bground_img/pained.png')} style={{width:200,height:220}}/>
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
            <Image source={require('./bground_img/bacchaman.png')} style={{width:200,height:220}}/>
          </TouchableHighlight> 
          <Text>{'\n'}Disappointed Kidman</Text>
        </View>
        </ScrollView>
    </ImageBackground>
  </View>
)};
//<Image source={require('./bground_img/hehelol.png')} style={{flex: 1, resizeMode: 'cover'}} />
function getBackground({route})
{
  let color='darkblue';
  if(route.name=='Home')
  {
    color = 'darkblue'
  }
  else if(route.name=='Feed')
  {
    color = 'green'
  }
  else if(route.name=='Settings')
  {
    color = 'yellow'
  }
  return color;
}

const HomeTabNavigator = ()=> (
  <Tab.Navigator screenOptions={({route})=>({
    tabBarIcon:({color,size})=>{
      let iconName;
      if(route.name=='Home')
      {
        iconName = 'home'
      }
      else if(route.name=='Feed')
      {
        iconName = 'rss'
      }
      else if(route.name=='Settings')
      {
        iconName = 'cog'
      }
      return <Icon name={iconName} size = {23} color={color} />
    }
  })}
  activeColor= 'orange'
  inactiveColor= 'white'
  shifting = {true}
  /*tabBarOptions={{
    style: {backgroundColor : 'darkblue',borderTopColor:'darkblue'}
  }}*/
  >
    <Tab.Screen name="Home" options = {{
      tabBarLabel:'Home',
      tabBarColor: 'darkblue'
    }} component={HomeStackScreen}/>
    <Tab.Screen name="Feed" options = {{
      tabBarLabel:'Feed',
      headerTitle:'Feed',
      tabBarColor: 'rgb(50,50,50)'
    }}component={FeedScreen}/>
    <Tab.Screen name="Settings" options = {{
      tabBarLabel:'Settings',
      title:'Settings',
      tabBarColor: 'rgb(94,68,121)'
    }}component={SettingsScreen}/>
  </Tab.Navigator>
);

function Drawer_Content(props){
  return(
    <View>
      <Text>test Text</Text>
    </View>

  );
}

function getHeaderTitle(route)
{
  const routeName = getFocusedRouteNameFromRoute(route)??'Home'
  switch(routeName)
  {
    case 'Home':
      return 'Home';
    case 'Feed':
      return 'Feed';
    case 'Settings':
      return 'Settings';
  }
}

function shouldHeaderBeShown(route)
{
  const routeName = getFocusedRouteNameFromRoute(route)??'Home';
  switch(routeName)
  {
    case 'Home':
      return false;
  }
}

const App= ({navigation}) => {
  return(
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home" 
        drawerContent = {props=><Drawer_Content {...props} /> }
      >
        <Drawer.Screen name="Home" component={HomeTabNavigator/*HomeStackScreen*/}/>
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
