import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class MeuComponente extends Component {
  render(){
    return(
      <View>
          <Text>primeiro parametro</Text>
          <Text>segundo parametro</Text>
      </View>
    );
  };
}

class app3 extends Component {
  render(){
    return (
      <MeuComponente></MeuComponente>
    );
  }
}



AppRegistry.registerComponent('app3', () => app3);
