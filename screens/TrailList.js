import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { trailmodel } from './model/trailModel'
import { connect } from "react-redux";
import TrailDisplay from './TrailDisplay';

export default class TrailList extends Component {
 
    constructor(props) {
        super(props);
        this.state = {}
    }
        
    render() {
        const {navigate} = this.props.navigation
        const {trails} = this.props
        // console.log(this.props);
        return (
           <View>
               <Text onPress={() => navigate('traildisplay')}>test</Text>
           </View>
        )
    }
}
const mapStateToProps = state=>
    {return state}
    
// export default connect(mapStateToProps)(TrailList)