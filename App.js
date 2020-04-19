
//This is an example code for Bottom Navigation//
import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//For React Navigation 3+
//import {
//  createStackNavigator,
//  createBottomTabNavigator,
//  createAppContainer,
//} from 'react-navigation';

//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator,createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';


import allcases from './pages/allcases';
import algeriacases from './pages/algeriacases';
import countrycases from './pages/countrycases';
import about from './pages/about';


const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    allcases: { 
      screen: allcases,    
      
    },      

  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#545454'
      },
      headerTintColor: '#FFFFFF',
      title:<Text style={{backgroundColor: '#545454', textAlign: 'center', flex: 1, fontFamily:'Cairo-Regular',fontSize:16}}>COVID-19 CASES</Text>,
    },
    headerLayoutPreset: 'center'
  }
);
const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen   
    
    algeriacases:  { 
      screen: algeriacases,
     
    } ,    
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#545454'
      },
      headerTintColor: '#FFFFFF',
      title:<Text style={{backgroundColor: '#545454', textAlign: 'center', flex: 1, fontFamily:'Cairo-Regular',fontSize:16}}>COVID-19 CASES</Text>,
    },
    headerLayoutPreset: 'center'
  }
);

const Profiler = createStackNavigator(
  {
    //Defination of Navigaton from setting screen   
    countrycases:  { 
      screen: countrycases,
      
    } ,    
  },
  {
    defaultNavigationOptions: {
     
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#545454'
      },
      headerTintColor: '#FFFFFF',
      title:<Text style={{backgroundColor: '#545454', textAlign: 'center', flex: 1, fontFamily:'Cairo-Regular',fontSize:16}}>COVID-19 CASES</Text>,
    },
    headerLayoutPreset: 'center'
  }
);
const About = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    about: { 
      screen: about,
     
    },      

  },
  {
   defaultNavigationOptions: {
      //Header customization of the perticular Screen     
      headerStyle: {
        backgroundColor: '#545454'
      },
      headerTintColor: '#FFFFFF',
      title:<Text style={{backgroundColor: '#545454', textAlign: 'center', flex: 1, fontFamily:'Cairo-Regular',fontSize:16}}>COVID-19 CASES</Text>,
       
    },
    headerLayoutPreset: 'center'
  }
  
);
About.navigationOptions = {
  tabBarIcon: ({ focused, horizontal, tintColor }) => {    
    let IconComponent = Ionicons;
    let iconName;   
    iconName = focused ? 'ios-help-circle' : 'ios-help-circle'; 
    return <IconComponent name={iconName} size={25} color={tintColor} />;      
  }
};

Profiler.navigationOptions = {
  tabBarIcon: ({ focused, horizontal, tintColor }) => {    
    let IconComponent = Ionicons;
    let iconName;   
    iconName = focused ? 'ios-flag' : 'ios-flag'; 
    return <IconComponent name={iconName} size={25} color={tintColor} />;      
  }
};

SettingsStack.navigationOptions = {
  tabBarIcon: ({ focused, horizontal, tintColor }) => {    
    let IconComponent = Ionicons;
    let iconName;   
    iconName = focused ? 'ios-compass' : 'ios-compass'; 
    return <IconComponent name={iconName} size={25} color={tintColor} />;      
  }
};

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused, horizontal, tintColor }) => {    
    let IconComponent = Ionicons;
    let iconName;   
    iconName = focused ? 'ios-globe' : 'ios-globe'; 
    return <IconComponent name={iconName} size={25} color={tintColor} />;      
  }
};


const App = createMaterialTopTabNavigator(
  {
    Global: HomeStack ,
    Location:  SettingsStack,
    'By Country': Profiler,
    About: About,
  },
  {    
      lazy: true,
      tabBarOptions: {
        showIcon : true,
        upperCaseLabel : false,
        labelStyle: {
          fontSize: 10,
        },
        style: { backgroundColor: '#545454' },
      },    
    initialRouteName: 'Global',
  },  
);
export default createAppContainer(App);


