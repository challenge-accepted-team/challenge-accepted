import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
  Alert,
  ScrollView
} from 'react-native';

var styles = require("../components/styles");

var ChallengesView = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      challenges: ds.cloneWithRows(this.props.challengeJson.data)
    }
  },

  render: function() {
    console.log(this.props.challengeJson.data[0].attributes.title);
    console.log(this.state.challenges);

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Challenges
        </Text>
        <View style={styles.messageBox}>
          <ListView
            dataSource={this.state.challenges}
            renderRow= {(rowData) => this._renderRow(rowData)}
          />
        </View>
        <TouchableHighlight
          style={styles.createChallengeButton}
          underlayColor='#949494'
          onPress={this._onCreateChallenge}>
          <Text>New Challenge</Text>
        </TouchableHighlight>
      </View>
    );
  },

  _renderRow: function(rowData) {
    return (
      <TouchableHighlight style={styles.touchableHighlight}>
          <Text style={styles.buttonText} onPress={()=> this._onViewChallenge(rowData)}>{rowData.attributes.title}</Text>
      </TouchableHighlight>
    )
  },

  _onViewChallenge: function (rowData) {
    console.log(rowData);
    return (
      Alert.alert(
        rowData.attributes.title,
        'You suck',
        [
          {text: 'OK'}
        ]
      )
    )
  },

  _onCreateChallenge: function() {
    this.props.navigator.push({
      name: 'New Challenge',
      passProps: {
        message: "Make a challenge my friend"
      }
    });
  },
});

module.exports = ChallengesView;
