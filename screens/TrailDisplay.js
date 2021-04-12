import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { trailmodel } from '../model/trailModel'

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
                <Text>Hello</Text>
                <Text>Bienvenu sur votre {trail.name} à créer</Text>
                <Text>Difficulté : {trail.difficulty}</Text>
                <Text>Nombre d'étapes : {trail.numberOfSteps}</Text>
                <Text>Description : {trail.description}</Text>
                <Button onPress = { ()=> this.props.navigation.navigate ('trailaddition')}title= 'Editer'/>   
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
