import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";
import HeaderComponent from "../components/HeaderComponent";

export class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  render() {
    return (
      <View>
        <View>
          <HeaderComponent />
        </View>
        <View></View>
        <View>
          <TextInput placeholder="Enter a Todo" />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
