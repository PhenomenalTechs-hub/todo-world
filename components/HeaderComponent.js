import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header } from "react-native-elements";

export class HeaderComponent extends Component {
  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: "Todo World", style: { color: "#fff", fontSize:18 } }}
        />
      </View>
    );
  }
}

export default HeaderComponent;
