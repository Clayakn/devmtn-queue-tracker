import React, { Component } from 'react';
import { View } from 'react-native';

// Routes
import TabNavigator from './routes';


export default class App extends Component {
    render() {
        return (
                <TabNavigator />
        )
      }
}