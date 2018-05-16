import  React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Posts from './Posts';
import Gallery from './Gallery';
import Home from './Home'
import  Ionicons  from 'react-native-vector-icons/Ionicons'


const App = TabNavigator({
  Home: {
    name: "Home",
    description: "Home Tab",
    screen: Home,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: "主頁",
      tabBarIcon: ({tintColor}) => (
        <Ionicons name="ios-home-outline" color={tintColor} size={iconSize}  />
      ),
    })
  },
  Posts: {
    name: "Novel",
    description: "Posts Tab",
    screen: Posts,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: "小說",
      tabBarIcon: ({tintColor}) => (
        <Ionicons name="ios-book-outline" color={tintColor} size={iconSize}  />
      ),
    }),
  },
  Gallery: {
    name: "Gallery",
    description: "Gallery Tab",
    screen: Posts,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: "插圖",
      tabBarIcon: ({tintColor}) => (
        <Ionicons name="ios-images-outline" color={tintColor} size={iconSize} />
      ),
    }),
  },
}, {
  tabBarPosition: "bottom",
  initialRouteName: "Posts",
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    showIcon: true,
    
    labelStyle: {
      fontSize: 8,              
      marginTop: 2,
      marginBottom: 1,
    },
    style: {
      backgroundColor: 'white',
      paddingBottom: 2,
    },
    activeTintColor: '#666',
    inactiveTintColor: '#aaa',
    showLabel: false,
  }
}); 

const iconSize = 36;

const styles = StyleSheet.create({
    tabBarIcon: {
       width:12,
       height:12,
    }

});

export default () => <App />;