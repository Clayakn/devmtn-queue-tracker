import React, { Component } from 'react';
import { View, Text} from 'react-native';

export default class SettingsScreen extends Component {
    constructor() {
      super();
      this.state = {};
    }
    render() {
        return(
            <View>
                <Text>Settings</Text>
            </View>
        );
      }
}