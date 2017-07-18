import React, { Component, PropTypes } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

const Dimensions = require('Dimensions')
const totalWidth = Dimensions.get('window').width
const totalHeight = Dimensions.get('window').height

class Dialog extends Component {
    constructor(props) {
        super(props)
    } 

    render () {
        let style = Object.assign(this.props.style, defaultStyle)
        let {confirmTxt = 'confirm', cancelTxt = 'cancel', title = 'test'} = this.props
        return (
            <View style={style.confirm}>
                <View style={style.dialog} >
                    <Text style={style.title}>
                        {title}
                    </Text>
                    <Text style={style.confirmBtn}
                        onPress={this.props.confirm}
                        >
                        {confirm}
                    </Text>
                    <Text style={style.cancelBtn}
                        onPress = {this.props.cancel}
                        >
                        {cancel}
                    </Text>
                </View>
            </View>
        )
    }
}

export default Dialog 

const defaultStyle = StyleSheet.create({
    confirm: {
        position: 'absolute',
        top: 0,
        width: totalHeight,
        height: totalHeight,
        backgroundColor: 'rgba(52,52,52,0.5)'
    },
    dialogStyle: {
        position: 'absolute',
        left: totalWidth/10,
        top: totalWidth*0.4,
        width: totalWidth*0.8,
        height: totalHeight*0.3,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    },

})

Dialog.propTypes = {
    confirm: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired
}

/**
 * //挂载时
    componentDidMount() {
        //这个位置并不是多余的，见后面说明
        var amIStillAlive=this.props.amIStillAlive;
        BackAndroid.addEventListener('ConfirmDialogListener',()=>{
            if(amIStillAlive()){
                this.props.userCanceled();
                return true;
            }
            return false;
        })
    }
    componentWillUnMount() {
        //RN bug 无法取消监听
        BackAndroid.removeEventListener('ConfirmDialogListener');
    }
 */

 /**
  *  userPressConfirm() {
        Alert.alert(
            '标题',
            '正文',
            [
                {text:'确定',onPress:this.userConfirmed},
                {text:'取消',onPress:this.userCanceled,style:'cancel'},
                {text:'额外选项一',onPress:this.userCanceled},
                {text:'额外选项二',onPress:this.userCanceled}
            ],
            {
                cancelable: false
            }
        );
    }
  */