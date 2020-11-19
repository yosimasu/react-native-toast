/* eslint-disable react-native/no-inline-styles */
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import React from 'react';
import Toast from 'react-native-toast';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Please enter text</Text>
        <TextInput
          style={{margin: 10}}
          multiline={true}
          placeholder="Type text to display in toast"
          onChangeText={(text) => this.setState({text})}
        />
        <Button
          onPress={() => {
            Toast.sampleMethod('123456', 2, console.log);
          }}
          title="Show Toast"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
