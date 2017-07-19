import React, { Component, PropTypes } from 'react'
import { ProgressViewIOS, Text, View, StyleSheet } from 'react-native'

class Progress extends Component {
    constructor(props, context) {
        super(props, context)

    }

    render() {
        let { style = defaultStyle, progress = 10 } = this.props
        let progressInfo = {
            progress,
            progressViewStyle: 'bar',
            progressTintColor: 'blue'
        }
        // let {progress} = this.
        return (
            <View style={style.container}>
                <ProgressViewIOS {...progressInfo} style={style.progress} />
                <Text style={style.content}>{this.props.progress} % </Text>
            </View>
        )
    }
}

export default Progress

Progress.PropTypes = {
    process: PropTypes.object.isRequired
}

// Progress.defaultProps = {
//     progress: {
//         progress: 0,
//         progressTintColor: '#FFFFFF',
//         trackTintColor: '#439ede'
//     }
// }

const defaultStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    progress: {

    },
    content: {
        fontSize: 10
    }
})
