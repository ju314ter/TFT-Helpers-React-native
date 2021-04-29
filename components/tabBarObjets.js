import React, {Component} from 'react';

import {StyleSheet, View, Text} from 'react-native';
import TabItemObjets from '../components/tabItemObjets'

export default class TabBarObjets extends Component {
    render() {
        const {navigation} = this.props;
        const {routes, index} = navigation.state;
        return(
            <View style={styles.container}>
                {routes.map((route, i)=> {
                    return <TabItemObjets 
                    navigation={navigation} 
                    key={route.routeName} 
                    {...route} 
                    isActive={index == i}/>
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 65,
        backgroundColor: '#37474f33',
        borderBottomColor : '#00000033',
        borderBottomWidth : 1,
        flexDirection : 'row',
      },
  });