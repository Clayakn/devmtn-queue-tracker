import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Student extends React.Component {
  render() {
    return (
        <Text style={styles.name}>{this.props.name}</Text>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    color: "blue",
    marginLeft: 15
  },
});
