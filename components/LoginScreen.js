import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator} from 'react-native';

export default class LoginScreen extends Component {
    constructor() {
      super();
      this.state = {};
    }
    render() {
        return(
            <View>
                 <Button
                title="Go to Home"
                onPress={() => this.props.navigation.navigate('Home')}
                />
                <Text>Login Screen</Text>
                {/* <ActivityIndicator size="large" color="#0000ff" /> */}
            </View>
        );
      }
}