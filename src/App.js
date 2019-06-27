import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './pages/Main'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}
