/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react'
import {Platform, SafeAreaView, ScrollView, StyleSheet, Text, View, Button, ImageBackground, Image} from 'react-native'
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from "react-navigation"
import { Icon } from 'react-native-elements'
import {mainNavTab, backgroundImages} from './constants/images'
import Champions from './vues/Champions'
import ObjetsNavigator from './vues/Objets'
import SynergiesNavigator from './vues/Synergies'
import TierListNavigator from './vues/TierList'

const AppNavigator = createBottomTabNavigator({
  Carrousel: {
    screen: Champions,
  },
  Combinaisons : {
    screen: ObjetsNavigator
  },
  Synergies : {
    screen : SynergiesNavigator
  },
  TierList : {
    screen : TierListNavigator
  }
  },
  {
    InitialRouteName : "Carrousel",
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
      },
      activeTintColor: 'white',
      inactiveTintColor: 'lightgrey',
      style: {
        backgroundColor: '#102027',
        paddingTop: 3,
      },
    },
      defaultNavigationOptions : ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        switch(routeName) {
          case "Carrousel" : 
            iconName = mainNavTab.carrousel;
          break;

          case "Combinaisons" :
            iconName = mainNavTab.combinaisons;
          break;

          case "Synergies" :
            iconName = mainNavTab.synergies;
          break;

          case "TierList" :
            iconName = mainNavTab.tierlist;
          break;
        }
      // return <Icon name={iconName} type='font-awesome' size={25} color={tintColor} style={{position: 'relative', top: 10, left: 0}}/>;
      return <Image source={iconName} style={{width: 20, height: 20}}/>;
      }
    }),
  }
);
const AppContainer = createAppContainer(AppNavigator);
const styles= StyleSheet.create({
  appWrapper : {
    
  }
})
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    <View style={styles.appWrapper}>
      <ImageBackground source={backgroundImages.darkblueBackground} style={{width: '100%', height: '100%'}}>
        <AppContainer />
      </ImageBackground>
    </View>
      )
    }
}
