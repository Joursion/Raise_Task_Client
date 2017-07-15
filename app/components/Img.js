import React, { Component } from 'react'
import { View, Image } from 'react-native'

const defaultStyle = {
    width: 20,
    height: 20
}

class Img extends Component {
    constructor(props, context) {
        super(props, context)

    }

    render() {
        let { style = defaultStyle, uri } = this.props
        return (
            <View>
                <Image
                    style={style}
                    source={{ uri: uri }}
                />
            </View>
        )
    }
}

export default Img