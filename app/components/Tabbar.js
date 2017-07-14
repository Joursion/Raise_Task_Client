import React, { Component } from 'react'
import { View, Text, TabBarIOS } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

const styles = {
    tabContent: {
        // flex: 1
        marginBottom: 50,
        width: 50, height: 50, backgroundColor: 'powderblue'
    }
}

class TabBar extends Component {
    render() {
        return (
            <TabBarIOS translucent={true}>
                <Icon.TabBarItem
                    title="Home"
                    iconName="ios-home-outline"
                    selectedIconName="ios-home"
                >
                    <View style={styles.tabContent}><Text>Home Tab</Text></View>
                </Icon.TabBarItem>
            </TabBarIOS>
        )
    }
}

export default TabBar


{/*<Icon.TabBarItem
                    title="Home"
                    iconName="three-bar"
                    selectedIconName="ios-home"
                >
                    <View style={styles.tabContent}><Text>TODO</Text></View>
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    title="Home"
                    iconName="heart"
                    selectedIconName="ios-home"
                >
                    <View style={styles.tabContent}><Text>心愿</Text></View>
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    title="我的"
                    iconName="person"
                    selectedIconName="ios-home"
                >
                    <View style={styles.tabContent}><Text>我的</Text></View>
                </Icon.TabBarItem>*/}

