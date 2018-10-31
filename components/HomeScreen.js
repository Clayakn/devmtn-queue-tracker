import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import DevMountainLogo from '../assets/DevMountain_logo.png';
import SocketTesting from './SocketTesting'

// Components 
import StudentContainer from './StudentContainer';
import Queue from './Queue';
import APITest from './APITest';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView
      maximumZoomScale={100}
      minimumZoomScale={1}
      contentContainerStyle={styles.container}
      >
        <Button
        title="Go to Login"
        onPress={() => this.props.navigation.navigate('Login')}
        />
        <View>
        <SocketTesting />
            <Text>DevMountain Tracker</Text>
              <Image source={DevMountainLogo} style={styles.logo}/>
            <StudentContainer />
            <Queue />
        </View>
      <APITest />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  logo: {
    height: 100,
    width: 100
  }
});


