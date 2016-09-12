'use strict';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
var styles = require("../components/styles");

export default class NewChallenge extends Component {
  static get defaultProps() {
    return {
      title: 'New Challenge'
    };
  }

  render() {
    return (
      <View>
        <Text>Create a new challenge.</Text>
      </View>
    )
  }
}