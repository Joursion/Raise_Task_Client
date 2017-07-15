import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Img from './Img.js'
import Progress from './Progress.js'

class WishItem extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        let {style = defaultStyle} = this.props
        return (
            <View style={style.containr}>
                <Text style={style.wishTitle}> {this.props.title} </Text>
                <Text style={style.wishContent}>{this.props.content} </Text>
                <Progress {this.props.progress} />
            </View>
        )
    }
}

export default WishItem

WishItem.PropTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    progress: PropTypes.number
}

const defaultStyle = StyleSheet.create({
    containr: {
        flex: 1
    },
    wishTitle: {
        fontSize: '1rem'
    },
    wishContent: {
        fontSize: '1rem'
    }
})



