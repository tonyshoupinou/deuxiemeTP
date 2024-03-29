import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Picker } from 'react-native';
import { connect } from "react-redux";

class TrailEdition extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.route.params.trail.id,
            name: this.props.route.params.trail.name,
            difficulty: this.props.route.params.trail.difficulty,
            numberOfSteps: this.props.route.params.trail.numberOfSteps,
            description: this.props.route.params.trail.description
        }
    }

    render() {    
        const { trail } = this.props.route.params;
        const { navigate } = this.props.navigation;

        const editTrail = (arg) => {
            const action = { type: 'EDIT_TRAIL', value: { 
                id: this.state.id,
                name: arg.name, 
                difficulty: arg.difficulty, 
                numberOfSteps: arg.numberOfSteps, 
                description: arg.description
            }};
            this.props.dispatch(action);
            navigate('traillist');
        }
         
        return (
            <View style={styles.container}>
                <TextInput 
                    label={trail.name}
                    onChangeText={(text) => this.setState({ name: text })} 
                    value={this.state.name} 
                    style={styles.inputType}
                    autoCapitalize="none"
                    returnKeyType="next"
                    placeholder="Nom de parcours"
                />

                <Picker
                    selectedValue={this.state.difficulty}
                    style={styles.inputType}
                    onValueChange={(itemValue) => this.setState({ difficulty: itemValue })}
                >
                    <Picker.Item label="Très facile" value="très facile" />
                    <Picker.Item label="Facile" value="facile" />
                    <Picker.Item label="Moyen" value="moyen" />
                    <Picker.Item label="Difficile" value="difficile" />
                </Picker>

                <TextInput 
                    label={trail.numberOfSteps}
                    onChangeText={(num) => this.setState({ numberOfSteps: num })} 
                    value={this.state.numberOfSteps} 
                    style={styles.inputType}
                    autoCapitalize="none"
                    keyboardType="numeric"
                    returnKeyType="next"
                    placeholder="Nombre d'étape"
                />

                <TextInput 
                    label={trail.description}
                    onChangeText={(text) => this.setState({ description: text })} 
                    value={this.state.description} 
                    style={styles.inputType}
                    multiline
                    numberOfLines={4}
                    autoCapitalize="none"
                    returnKeyType="done"
                    placeholder="Description"
                />

                <TouchableOpacity
                    style={styles.saveBtn}
                    onPress={
                        () => {
                            editTrail(this.state)
                        }
                    }    
                >
                    <Text style={styles.colorBtn}>Sauvegarder</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    inputType: {
        width: '80%',
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'blue'
    },
    saveBtn: {
        backgroundColor: 'blue',
        textAlign: 'center',
        width: '80%',
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
    },
    colorBtn: {
        color: 'white',
        fontWeight: 'bold'
    }
})

const mapStateToProps = state => { 
    return state;
};
    
export default connect(mapStateToProps) (TrailEdition);