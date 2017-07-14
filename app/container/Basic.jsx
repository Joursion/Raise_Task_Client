import { Component, }from 'react';
import _ from 'lodash';

export default class TComponent extends Component {
    constructor (props) {
        super(props);
    }
    bindCtx (...funcList) {
        if (_.isArray(funcList[0])) {
            funcList = funcList[0];
        }
        funcList.forEach(func => {
            this[func] = this[func].bind(this);
        });
    }
}