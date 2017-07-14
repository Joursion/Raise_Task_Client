// import React, { Component } from 'react'
// import { PickerIOS, Text, View } from 'react-native'

// const PickerIOSItem = PickerIOS.Item

// class BasicPicker extends Component {
//     constructor(props, context) {
//         super(props, context)
//         this.state = {
//             selected: ''
//         }
//     }

//     onValueChange = (op) => {
//         this.setState({ selected: op })
//     }

//     render() {
//         let { title, options } = this.props
//         return (
//             <View>
//                 <Text>{title}</Text>
//                 <PickerIOS selectedValue={this.state.selected} onValueChange={this.onValueChange}>
//                     {
//                         options && Object.keys(options).map((op) => {
//                             <PickerIOSItem
//                                 key={op}
//                                 value={op}
//                                 label={op}
//                             >
//                             </PickerIOSItem>
//                         })
//                     }
//                 </PickerIOS>
//             </View>
//         )
//     }
// }

// export default BasicPicker

