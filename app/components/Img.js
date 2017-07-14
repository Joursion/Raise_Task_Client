import React, { Component } from 'react'

const defaultStyle = {
    width: 20,
    height: 20
}

class Img extends Component {
    constructor(props, context) {
        super(props, context)

    }

    render() {
        let { style = defaultStyle, url } = this.props
        return (
            <div>
                <img {...style} url = {url} />
            </div>
        )
    }
}

export default Img