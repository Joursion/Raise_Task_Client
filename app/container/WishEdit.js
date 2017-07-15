import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

import Img from '../components/Img.js'

class WishEdit extends Component {
    constructor (props, context) {
        super(props, context)
        
    }

    componentDidMount() {
        
    }

    render () {
        return (
            <Img uri = {} />
            <View style={style.containr}>
                <Text>许下我的心愿</Text>
                <TextInput placeholder={'❤️'} maxLength={100}/>
                <Text>心愿目标金额</Text>
                <TextInput placeholder={'¥ 99'} maxLength={10}/>
            </View>
        )
    }
}

export default WishEdit

const style = StyleSheet.create({
    containr: {
        flex: 1,
        backgroundColor: 'white'
    },

})