import React, { Component , PropTypes} from 'react'
import { View, Tex , StyleSheet} from 'react-native';

class TaskItem extends Component {
    constructor (props, context) {
        super(props, context)
        
    }
    
    _onPress = () => {
        this.props.onPressItem(this.props.id)
    }

    render () {
        return (
            <View style={style.container}>
                {/* {...this.props} */}
                <Text style={style.taskContent}></Text>
                <Text style={style.taskType}></Text>
                <Text onPress={this._onPress} style={style.finishBtn}>完成</Text>
            </View> 
        )
    }
}

export default TaskItem

TaskItem.PropTypes = {
    onPressItem: PropTypes.func
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    taskContent: {
        
    },
    taskType: {
        backgroundColor: '#ffffff'
    },
    finishBtn: {

    }
}
