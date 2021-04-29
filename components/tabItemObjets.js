import React, {Component} from 'react';

import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

import {tabBarIconsObjets} from '../constants/images'

export default class TabItemObjets extends Component {
    handlePress = () => {
        this.props.navigation.navigate(this.props.routeName)
    }
    render() {
        const routeName = this.props.routeName;
        const icon = tabBarIconsObjets[routeName];
        return(
            <View style={this.props.isActive? styles.container_active : styles.container}>
                <TouchableOpacity onPress={this.handlePress}>
                    <Image style={styles.icon} source={icon}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderBottomColor : '#62727b',
        borderBottomWidth : 1,
    },
    container_active: {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderBottomColor : '#48a697',
        borderBottomWidth : 1,
    },
    icon : {
        width: 30,
        height: 30,
    }
  });