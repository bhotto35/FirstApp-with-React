/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/*import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
                This is just a test line of text
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;*/
//import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View, Button, Settings, Easing, Image} from 'react-native';
import {NavigationContainer, useIsFocused,getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator,TransitionPresets,CardStyleInterpolators} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import Icon from 'react-native-ionicons';
//import find from './icons/find.png';
import Icon from 'react-native-vector-icons/FontAwesome';
//import {Ionicons} from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

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
    alignItems: "center"
  }}>
    <Text style={{color: 'green', fontSize: 24}}>Home Screen</Text>
  <Button title="Go to Details screen" onPress={()=>navigation.navigate('Details')}/>
  
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

const SettingsScreen = ({navigation}) =>{
  const isFocused = useIsFocused();

  return (<View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }}><Text style={{color: isFocused? 'grey': 'green', fontSize: 24}}>Settings</Text>
  <Button title="Go to Home screen" onPress={()=>navigation.goBack()}/>
  </View>
);}

const DetailsScreen = (props)=>
(
  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }}><Text style={{color: 'darkblue'}}>Details Screen</Text>
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

const FeedScreen = props=>(
  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }}><Text style={{color: 'darkblue'}}>Feed Screen</Text>
  </View>
);

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
      return <Icon name={iconName} size = {size} color={color}/>
    }
  })}>
    <Tab.Screen name="Home" /*options={{tabBarIcon:({color,size})=>(
      <Icon name={'add'} color={size} size={size}/>
    )}}*/ component={HomeStackNavigator}/>
    <Tab.Screen name="Feed" component={FeedScreen}/>
    <Tab.Screen name="Settings" component={SettingsScreen}/>
  </Tab.Navigator>
);

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration:500,
    easing:Easing.linear
  },
};

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
    /*<View>
      <Text>
        Just some text, and some more text. Text to test update after reload
      </Text>
    </View>*/
    <NavigationContainer >
      <Stack.Navigator initialRouteName = "Home" 
      screenOptions = {{
        gestureEnabled: true,
        gestureDirection:'vertical',
        ...TransitionPresets.FadeFromBottomAndroid
        //cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid
        //transitionSpec:{open:config,close:config}
      }}
      headerMode='float'/*this is for when we want the header to remain fixed */
      animation = 'fade' >
        
        <Stack.Screen name = "Home" options={({route})=>({
          title:getHeaderTitle(route),
          headerShown: shouldHeaderBeShown(route)
        })} /*{{
          title: 'Home Screen', 
          headerRight: ({navigation})=> (
          <Button
            title = "Alert"
            onPress = {() =>{alert('Hmm')}}
          />)
        }}*/
        component = {HomeTabNavigator/*HomeScreen*/} style={{alignText:"center"}}/>
        <Stack.Screen name = "Settings" 
        options={{title: 'Settings'}}
        component = {SettingsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;