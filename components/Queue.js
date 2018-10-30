import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Queue extends Component {
    constructor(props) {
      super(props);
      this.state = {
          isInQueue: false
        };
  
    
    }
    changeQueue = () => {
        this.setState(prevState => ({
            isInQueue: !prevState.isInQueue
        }))
    }
    render() {
        let display = this.state.isInQueue ? "A person is in Queue" : "There is no one in Queue";
        return (
            <View>
                <Text>{display}</Text>
                <Button 
                    title='Queue Click'
                    onPress={this.changeQueue} /> 
            </View>
        );
      }
}