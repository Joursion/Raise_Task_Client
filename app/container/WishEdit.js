import React, { Component } from 'react'
import {
    StyleSheet, Text, View, TextInput,
    Image, Dimensions, Button, Alert
} from 'react-native'

import Img from '../components/Img.js'

const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get('window').height

const IMG_HEIGHT = 200

class WishEdit extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            btnTitle: '保存'
        }

    }

    componentDidMount() {

    }

    onPress() {
        Alert.alert('press it')
    }

    render() {
        return (
            <View style={styles.containr}>
                {/* <Image source={{uri: "http://img.hb.aicdn.com/c9678b804128a0e6ff84cbca93779aed67d2450c2cca9-HdqnLc_fw658"}} 
                    stlye={{width: WIDTH, height: 200}}
                /> */}
                <Image source={{uri: 'https://wx2.sinaimg.cn/mw690/c087c063gy1fhrn3uv5muj21kw16nq6y.jpg'}}
                    style={{width: WIDTH, height: 400}} />

                <View style={styles.input} >
                    <Text style={styles.wishText}>许下我的心愿</Text>
                    <TextInput style={styles.wishContent} placeholder={'❤️'} maxLength={100} />
                    <Text style={styles.wishText}>心愿目标金额</Text>
                    <TextInput stlye={styles.wishAmount} placeholder={'¥ 99'} maxLength={100} />
                    <Button color={"#841584"} title={this.state.btnTitle} onPress={() => this.onPress()} />
                </View>
            </View>
        )
    }
}

export default WishEdit

const styles = StyleSheet.create({
    containr: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center'
    },
    wishText: {
        height: 100,
    },
    input: {
        top: IMG_HEIGHT,
        // margin: 'auto',
        width: WIDTH - 30,
        backgroundColor: 'white'
    },
    wishContent: {
        height: 100,
        width: WIDTH - 50
    },
    wishAmount: {
        height: 100,
        width: WIDTH - 50
    }

})