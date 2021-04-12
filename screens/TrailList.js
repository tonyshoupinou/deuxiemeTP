import React, { Component } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { connect } from "react-redux";
import TrailDisplay from './TrailDisplay';

class TrailList extends Component {
 
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        const {trails} = this.props;

        return (
           <View>
               <FlatList
                    data={trails}
                    renderItem={({ item }) => (
                        <TrailDisplay trail={item} navigate={navigate} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />

               <Button
                    onPress={() => navigate('trailaddition')}
                    title="Add a trail"
                />
           </View>
        )
    }
}

const mapStateToProps = state => { 
    return state;
};
    
export default connect(mapStateToProps) (TrailList);
