import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import DevMountainLogo from './assets/DevMountain_logo.png';
import SocketTesting from './components/SocketTesting'

// Components 
import StudentContainer from './components/StudentContainer';
import Queue from './components/Queue';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <SocketTesting />
        <Text>DevMountain Tracker</Text>
          <Image source={DevMountainLogo} style={styles.logo}/>
        <StudentContainer />
        <Queue />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 100
  }
});
