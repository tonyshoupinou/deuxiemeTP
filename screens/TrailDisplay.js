import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { trailmodel } from '../model/trailModel'

export default class TrailDisplay extends Component {
 


constructor(props) {
    super(props)
    
}
    
    render() {
        const trail = trailmodel
        return (
            <View>
                <Text>Hello</Text>
                {trailmodel.id}
            </View>
        )
    }
}
