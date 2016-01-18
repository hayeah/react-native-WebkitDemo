/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import * as url from "url";

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  WebView,
  Alert,
} = React;

var RNWebkitDemo = React.createClass({
  onNavigationStateChange(e) {
    const parsedURL = url.parse(e.url);
    if(parsedURL.hash === "#hello") {
      Alert.alert("hello from webview");
    }

    if(parsedURL.hash === "#aloha") {
      Alert.alert("aloha from webview");
    }
    console.log("load",e);

  },

  showAlert() {
    console.log("alert!");
    Alert.alert("hello!");
  },

  render: function() {

    return (

      <View style={styles.container}>
        <TouchableOpacity onPress={this.showAlert}>
          <Text>show alert</Text>
        </TouchableOpacity>

        <WebView
          style={styles.webview}
          url="http://localhost:8080"
          onNavigationStateChange={this.onNavigationStateChange}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'rgba(255,0,0,0.2)',
  },

  webview: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: 'rgba(0,255,0,0.2)',
  },

});

AppRegistry.registerComponent('RNWebkitDemo', () => RNWebkitDemo);
