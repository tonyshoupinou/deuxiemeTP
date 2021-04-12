import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { trailmodel } from './model/trailModel';
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
                <Text>Bienvenu sur votre {trail.name} à créer</Text>
                <Text>Difficulté : {trail.difficulty}</Text>
                <Text>Nombre d'étapes : {trail.numberOfSteps}</Text>
                <Text>Description : {trail.description}</Text>
                <Button
                    onPress={() => navigate('trailEdition', { trail: trail })}
                    title="Edit"
                />
                <Text onPress={() => navigate('trailaddition')}>Go to Validation</Text>  
            </View>
        )
    }
};

const styles = StyleSheet.create({
    button: {
        fontSize: 20,
        color: "blue",
        fontWeight: 'bold',
        paddingVertical: 14,
    }
});

const mapStateToProps = state => { 
    return state;
};
    
export default connect(mapStateToProps) (TrailDisplay);

