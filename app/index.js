/*
 * @Author: Joursion 
 * @Date: 2017-07-05 22:31:56 
 * @Last Modified by: Joursion
 * @Last Modified time: 2017-07-06 13:30:23
 */

import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    View,
    Text
} from 'react-native'
// import { Provider } from 'react-redux'

import App from './container/App.js'
// import store from './store'

export default class root extends Component {
    render() {
        return (
            <App/>
        )
    }
}

// export default class Root extends Component {
//     render() {
//         return (
//             <Text>Hello</Text>
//         )
//     }
// }

// export default class root extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         )
//     }
// }