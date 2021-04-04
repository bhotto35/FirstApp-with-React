
import React from 'react';
import {StyleSheet,Dimensions,TouchableHighlight, Text, View, ScrollView, Button, Image, ImageBackground, Easing} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer as DW, Text as TextD, TouchableRipple, Switch} from 'react-native-paper';
import {NavigationContainer, useIsFocused,getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import Icon from 'react-native-ionicons';
//import find from './icons/find.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerContent} from './screens/Drawer';
import ProfileStackScreen from './screens/Profile'; 
import BookmarkStackScreen from './screens/Bookmark';
import FeedScreen from './screens/Feed';
//import {Ionicons} from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();//createBottomTabNavigator();
const HomeStack = createStackNavigator();
//const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

//--FIRST FUNCTION THAT DOESN'T UPDATE TITLE-----//
const HomeScreen = ({navigation}) =>{
  return (<View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgb(52,50,70)'
  }} >
    <Text style={{color: 'lawngreen', fontFamily: "Arial",fontSize: 24}}>Home {"\n"}</Text>
  <Button title="Go to Details screen" 
  color = 'orange'
  onPress={()=>navigation.navigate('Details')}/>
  
  </View>);
}

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
    <Stack.Navigator initialRouteName = "Details" 
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
        })} component = {DetailsScreen}/>
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
  return(
    <HomeStack.Navigator /*screenOptions = {{headerShown: false}}/* not needed, as shouldHeaderBeShown already defined*/>
      <HomeStack.Screen name = "Home" component={HomeScreen}/>
      <HomeStack.Screen name = "Details" component={DetailsScreen}/>
    </HomeStack.Navigator>
  );
};


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
      <Button title="Go to Details screen" 
        color = 'orange'
        onPress={()=>props.navigation.navigate('Details')}/>
    </View>

  );
}

/*const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        title="Click Here"
        onPress={() => alert('Button Clicked!')}
      />
    </View>
  );
};

const ProfileStackScreen = ({navigation}) =>{
  return(
    <Stack.Navigator name = "Profile" 
      screenOptions = {{
        headerStyle : { shadowColor : 'violet', shadowOffset:3,backgroundColor:'darkgreen'},
        headerTintColor : 'white',
        headerTitleStyle: {fontFamily:'Impact',fontWeight:'bold'}
      }}
      headerMode='float'
      animation = 'fade' 
      >
        
        <Stack.Screen name = "Profile" options={({route})=>({
          title:'Profile',
          headerLeft : ()=>(
            <Icon.Button name = "list" backgroundColor="green" color="white"
            onPress = {()=>{navigation.openDrawer()}} />
          )
        })} component = {ProfileScreen}/>
      </Stack.Navigator>
  );
}*/

const App= ({navigation}) => {
  return(
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home" 
        drawerContent = {({navigation})=><DrawerContent {...navigation} /> }
      >
        <Drawer.Screen name="Home" component={HomeTabNavigator/*HomeStackScreen*/}/>
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="Bookmark" component={BookmarkStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
