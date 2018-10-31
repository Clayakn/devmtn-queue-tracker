import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class APITest extends Component {
    constructor(props) {
      super(props);
      this.state = {
          apiInfo: ''
        };
  
    }
    fetchAPI = () => {
        this.setState({
            apiInfo: "Waiting..."
        })
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(json => {
                console.log('json', json)
                this.setState({
                    apiInfo: json.value
                })
            })
            .catch(error => {
                console.error(error);
                this.setState({
                    apiInfo: ''
                })
            });
    }
    render() {
        const { apiInfo } = this.state
        return(
            <View>
                <Text>API: {apiInfo}</Text>
                <Button 
                    title='Fetch API'
                    onPress={this.fetchAPI} /> 
            </View>
        );
      }
}