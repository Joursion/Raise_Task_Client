/*
 * @Author: Joursion 
 * @Date: 2017-07-05 22:15:38 
 * @Last Modified by: Joursion
 * @Last Modified time: 2017-07-15 10:06:42
 * Tasks详情页
 */

import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Task extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            selected: (new Map():Map<string, string>)
        }
    }
    
    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id: string) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
            // copy the map rather than modifying state.
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // toggle
            return { selected };
        });
    };

    _renderItem = ({ item }) => (
        <MyListItem
            id={item.id}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.id)}
            title={item.title}
        />
    );

    render() {
        return (
            <FlatList
                data={this.props.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}

export default Task
