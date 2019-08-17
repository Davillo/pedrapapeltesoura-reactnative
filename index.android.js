import React, { Component } from "react";
import { AppRegistry, Text, View, Button } from "react-native";

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

    alert(result);

    this.setState({
      userChoice: userChoice,
      computerChoice: pcChoice,
      result: result
    });
  };

  render() {
    return (
      <View>
        <Text>Escolha do computador: {this.state.computerChoice}</Text>
        <Text>Escolha do Usuario: {this.state.userChoice}</Text>
        <Text>Resultado: {this.state.result}</Text>
        <Button
          onPress={() => {
            this.rockPaperScissors("pedra");
          }}
          title="Pedra"
        />
        <Button
          onPress={() => {
            this.rockPaperScissors("papel");
          }}
          title="Papel"
        />
        <Button
          onPress={() => {
            this.rockPaperScissors("tesoura");
          }}
          title="Tesoura"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("app3", () => app3);
