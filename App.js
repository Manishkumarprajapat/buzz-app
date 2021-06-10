import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import FacebookScreen from './screens/fbscreen';
import InstagramScreen from './screens/instascreen';

export default class App extends React.Component {
  render() {
  return (
    <View style = {styles.container}>
    <AppContainer/>
  
        </View>
    
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FacebookScreen},
  Instagram:{screen:InstagramScreen},
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:1,
    backgroundColor:"blue",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
