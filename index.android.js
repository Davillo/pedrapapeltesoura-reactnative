import React, { Component, Stylesheet } from "react";
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
  StyleSheet
} from "react-native";

class app3 extends Component {
  constructor(props) {
    super(props);
    this.state = { userChoice: "", computerChoice: "", result: "" };
  }

  generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
  };

  getComputerChoice = () => {
    var computerChoice = "";
    switch (this.generateRandomNumber()) {
      case 0:
        computerChoice = "pedra";
        break;
      case 1:
        computerChoice = "papel";
        break;
      case 2:
        computerChoice = "tesoura";
        break;
    }
    return computerChoice;
  };

  rockPaperScissors = userChoice => {
    let pcChoice = this.getComputerChoice();
    let result = "";

    if (userChoice == "pedra") {
      if (pcChoice == "pedra") result = "empate";

      if (pcChoice == "tesoura") result = "Usuário venceu";

      if (pcChoice == "papel") result = "Computador venceu";
    }

    if (userChoice == "tesoura") {
      if (pcChoice == "pedra") result = "Computador venceu";

      if (pcChoice == "tesoura") result = "empate";

      if (pcChoice == "papel") result = "Usuário venceu";
    }

    if (userChoice == "papel") {
      if (pcChoice == "pedra") result = "Usuário venceu";

      if (pcChoice == "tesoura") result = "Computador venceu";

      if (pcChoice == "papel") result = "empate";
    }

    this.setState({
      userChoice: userChoice,
      computerChoice: pcChoice,
      result: result
    });
  };

  render() {
    return (
      <View>
        <Topo />

        <View style={styles.actionPanel}>
          <View style={styles.btnChoose}>
            <Button
              onPress={() => {
                this.rockPaperScissors("pedra");
              }}
              title="Pedra"
            />
          </View>

          <View style={styles.btnChoose}>
            <Button
              onPress={() => {
                this.rockPaperScissors("papel");
              }}
              title="Papel"
            />
          </View>

          <View style={styles.btnChoose}>
            <Button
              onPress={() => {
                this.rockPaperScissors("tesoura");
              }}
              title="Tesoura"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.txtResult}>{this.state.result}</Text>

          <Icon escolha={this.state.computerChoice} jogador="Computador" />

          <Icon escolha={this.state.userChoice} jogador="Usuário" />
        </View>
      </View>
    );
  }
}

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require("./imgs/jokenpo.png")} />
      </View>
    );
  }
}

class Icon extends Component {
  render() {
    if (this.props.escolha == "pedra") {
      return (
        <View>
          <Text style={styles.icon}>{this.props.jogador}</Text>
          <Image source={require("./imgs/pedra.png")} />
        </View>
      );
    } else if (this.props.escolha == "papel") {
      return (
        <View>
          <Text style={styles.icon}>{this.props.jogador}</Text>
          <Image source={require("./imgs/papel.png")} />
        </View>
      );
    } else if (this.props.escolha == "tesoura") {
      return (
        <View>
          <Text style={styles.icon}>{this.props.jogador}</Text>
          <Image source={require("./imgs/tesoura.png")} />
        </View>
      );
    } else {
      return false;
    }
  }
}

const styles = StyleSheet.create({
  btnChoose: {
    width: 90
  },
  actionPanel: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 30
  },
  txtResult: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    height: 60,
    alignSelf: "center"
  },
  icon: {
    alignSelf: "center"
  }
});

AppRegistry.registerComponent("app3", () => app3);
