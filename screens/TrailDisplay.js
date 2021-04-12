import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { trailmodel } from '../model/trailModel';
import { connect } from "react-redux";

class TrailDisplay extends Component {
 
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        const trail = trailmodel;

        return (
            <View>
                <Text>Hello</Text>
                {/* {trailmodel.id} */}

                <Button
                    onPress={() => navigate('trailEdition', { trail: trail })}
                    title="Edit"
                />
            </View>
        )
    }
}

const mapStateToProps = state => { 
    return state;
};
    
export default connect(mapStateToProps) (TrailDisplay);
