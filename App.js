import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import DevMountainLogo from './assets/DevMountain_logo.png';
import SocketTesting from './components/SocketTesting'

// Components 
import StudentContainer from './components/StudentContainer';
import Queue from './components/Queue';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView
      maximumZoomScale={100}
      minimumZoomScale={1}
      contentContainerStyle={styles.container}
      >
        <View>
        <SocketTesting />
            <Text>DevMountain Tracker</Text>
              <Image source={DevMountainLogo} style={styles.logo}/>
            <StudentContainer />
            <Queue />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginLeft: 60
  },
  logo: {
    height: 100,
    width: 100
  }
});
