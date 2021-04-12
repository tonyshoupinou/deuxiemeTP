import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TextInput, Button, Alert, Text, View } from "react-native";
import { connect } from 'react-redux';

class AddTrail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            difficulty: "",
            numberOfStep: "",
            description: ""
        }
    
    }

    writeTrail() {
    const action = { type: 'ADD_TRAIL', value: {name: this.state.name, difficulty: this.state.difficulty, numberOfStep: this.state.numberOfStep, description: this.state.description}}
    this.props.dispatch(action)
    console.log('status', this.props);
    }

    render () {
        console.log('status 2', this.state);
        // const {navigate} = this.props.navigation;
        // console.log('props navigation', this.props.navigation.navigate);
        return (
            <View>
                <TextInput
                    label="name"
                    style={styles.input}
                    onChangeText={text => this.setState({ name: text })}
                    value={this.state.name}
                    placeholder="name"
                    returnKeyType="next"
                />
                <TextInput
                    label="difficulty"
                    style={styles.input}
                    onChangeText={text => this.setState({ difficulty: text })}
                    value={this.state.difficulty}
                    placeholder="difficulty"
                    returnKeyType="next"
                />
                <TextInput
                    label="number of Steps"
                    style={styles.input}
                    onChangeText={text => this.setState({ numberOfStep: text })}
                    // à modifier pour ne rentrer qu'un type number
                    value={this.state.numberOfStep}
                    placeholder="number of Steps"
                    keyboardType="numeric"
                    returnKeyType="next"
                />
                <TextInput
                    label="description"
                    style={styles.input}
                    onChangeText={text => this.setState({ description: text })}
                    value={this.state.description}
                    placeholder="description"
                    returnKeyType="done"
                />
                {/* <Button title="Submit" color="#f194ff"
                 onPress={() => navigate('traildisplay')}></Button> */}
                <Button title="Submit" color="#f194ff"
                 onPress={() => this.writeTrail()}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});
const mapStateToProps = state=>
    {return state}
    
export default connect(mapStateToProps)(AddTrail)