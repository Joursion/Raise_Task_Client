import {TabNavigator, StackNavigator, NavigationActions} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import {Platform} from 'react-native'
import React, {Component} from 'react'

import Task from './Task'
import Wish from './Wish'
import Me from './Me'

const Navigator = TabNavigator({
    task: {
        screen: Task,
        navigationOptions: {
            tabBarLabel: '任务',
            tabBarIcon: () => <Icon size={20} name="ios-list-box-outline"/>
        }
    },
    wish: {
        screen: Wish,
        navigationOptions: {
            tabBarLabel: '心愿',
            tabBarIcon: () => <Icon size={20} name="md-heart-outline"/>
        }
    },
    me: {
        screen: Me,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: () => <Icon size={20} name="ios-person-outline"/>
        } 
    }
},{
    tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 12,
        },
        // style: {
        //     backgroundColor: 'blue',
        // },
    },
    swipeEnabled: true,
    animationEnabled: true
})

const AppNavigator = StackNavigator({
    home: {
        screen: Navigator
    },
    me: {
        screen: Me
    },
    wish: {
        screen: Wish
    }
}, {
    initialRouteName: 'tasks',
    headerMode: 'none',
    // mode: Platform.OS === 'ios' ? 'modal' : 'card'
})

export default Navigator