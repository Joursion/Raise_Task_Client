/*
 * @Author: Joursion 
 * @Date: 2017-06-22 17:00:41 
 * @Last Modified by: Joursion
 * @Last Modified time: 2017-07-05 23:27:03
 */

import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    View ,
    Text
} from 'react-native'

import Index from './Index'

class App extends Component {
    constructor(props) {
        super(props)
    }

    renderScene = (route, navigator) =>{
        let Component = route.component;
        return (
            <Component navigator={navigator} route={route} {...route.passProps}/>
        );
    }

    configureScene = () =>{
        return Navigator.SceneConfigs.PushFromRight;
    }

    render(){
        return(
            <Index/>
        )
    }
}

export default App