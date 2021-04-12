import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class TrailDisplay extends Component {
 
    constructor(props) {
        super(props);
    }


    render() {
        const {trail, navigate} = this.props;
        
        return (
            <View>
                <Text>Intitulé : {trail.name}</Text>
                <Text>Difficulté : {trail.difficulty}</Text>
                <Text>Nombre d'étapes : {trail.numberOfSteps}</Text>
                <Text>Description : {trail.description}</Text>
                <Button
                    onPress={() => navigate('trailEdition', { trail: trail })}
                    title="Edit this trail"
                />
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

