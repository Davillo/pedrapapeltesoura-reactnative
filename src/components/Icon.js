import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

class Icon extends Component {
  render() {
    if (this.props.escolha == "pedra") {
      return (
        <View>
          <Text style={styles.icon}>{this.props.jogador}</Text>
          <Image source={require("../../imgs/pedra.png")} />
        </View>
      );
    } else if (this.props.escolha == "papel") {
      return (
        <View>
          <Text style={styles.icon}>{this.props.jogador}</Text>
          <Image source={require("../../imgs/papel.png")} />
        </View>
      );
    } else if (this.props.escolha == "tesoura") {
      return (
        <View>
          <Text style={styles.icon}>{this.props.jogador}</Text>
          <Image source={require("../../imgs/tesoura.png")} />
        </View>
      );
    } else {
      return false;
    }
  }
}

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center"
  }
});

export default Icon;
