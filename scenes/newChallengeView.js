import React, { Component } from 'react';
var styles = require("../components/styles");

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

var NewChallengeView = React.createClass({

  getInitialState() {
    return {
      challengeTitle: '',
      challengeDescription: '',
      challengeAnte: ''
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          New Challenge
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={this.state.challengeTitle}
          onChange={(event) => this.setState({challengeTitle: event.nativeEvent.text})}>
        </TextInput>

        <TextInput
          multiline={true}
          style={styles.inputTextArea}
          placeholder="Description"
          value={this.state.challengeDescription}
          onChange={(event) => this.setState({challengeDescription: event.nativeEvent.text})}>
        </TextInput>

        <TextInput
          style={styles.input}
          placeholder="Ante"
          value={this.state.challengeAnte}
          onChange={(event) => this.setState({challengeAnte: event.nativeEvent.text})}>
        </TextInput>

        <TouchableHighlight underlayColor='#949494' style={styles.button} onPress={this._viewFormSubmit}>
          <Text style={styles.buttonText}>
            Create Challenge
          </Text>
        </TouchableHighlight>
      </View>
    );
  },

  _viewFormSubmit: function() {
    let title       = this.state.challengeTitle;
    let description = this.state.challengeDescription;
    let ante        = this.state.challengeAnte;

    fetch('http://localhost:3000/challenges', {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      },
      body: JSON.stringify({
        data: [{
          "type": "challenges",
          "attributes": {
            "title": title,
            "description": description,
            "ante": ante,
            "user-id": 1
          }
        }]
      })
    });
  }
});

module.exports = NewChallengeView;
