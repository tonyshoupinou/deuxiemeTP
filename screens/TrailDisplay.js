import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { trailmodel } from './model/trailModel'

export default class TrailDisplay extends Component {

constructor(props) {
    super(props)  
}
    
    render() {
        const trail = trailmodel
        const {navigate} = this.props.navigation
        console.log(this.props);
        return (
            <View>
                <Text onPress={() => navigate('trailaddition')}>Go to Validation</Text>
            </View>
        )
    }
}