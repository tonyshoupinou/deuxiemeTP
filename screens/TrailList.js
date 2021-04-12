import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from "react-redux";

class TrailList extends React.Component {
 
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        console.log(this.props)

        return(
            <View>
                <Button
                    onPress={() => navigate('traildisplay')}
                    title="go to display"
                />
            </View>
        )
    }
        

}

const mapStateToProps = state => { 
    return state;
};
    
export default connect(mapStateToProps) (TrailList);