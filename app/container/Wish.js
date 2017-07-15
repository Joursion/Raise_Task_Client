import React, { Component, PropTypes } from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'

import WishItem from '../components/WishItem'

class Wish extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wishs: []
        }
    }

    componentWillMount () {

    }

    componentDidMount () {

    }

    componentWillReceiveProps (nextProps) {

    }

    onPress = () => {

    }

    _renderWish = () => {
        let wishs = this.state.wishs
        if(wishs) {
            return (
                <FlatList style={style.container}>
                    {
                        wishs.map((w, index) => {
                            <WishItem {...w} />
                        })
                    }
                </FlatList>
            )
        } else {
            return (
                <View>
                    <Text style={style.noWishTip}> 您当前还没有心愿哦～</Text>
                    <Button onPress={this.onPress} style={style.noWishBtn}> 去许愿 ～ </Button>
                </View>
            )
        }
    }

    render () {
        return (
            this._renderWish()
        )
    }
}

export default Wish

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    noWishTip: {
        
    },
    noWishBtn: {
        
    }
})