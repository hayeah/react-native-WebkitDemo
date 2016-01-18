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
  WebView,
  TouchableOpacity,
  StatusBarIOS,
  Alert,
} = React;

StatusBarIOS.setHidden(true);

var RNWebkitDemo = React.createClass({
  onNavigationStateChange(e) {
    const parsedURL = url.parse(e.url);
    if(parsedURL.protocol === "react-js-navigation:") {
      Alert.alert("go to: "+parsedURL.hostname);
    }
    console.log("load",e);

  },

  showAlert() {
    console.log("alert!");
    Alert.alert("hello!");
  },

  render: function() {
    console.log("render view");
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.showAlert}>
          <Text>show alert</Text>
        </TouchableOpacity>
        <WebView
          url="http://localhost:8080/"
          bounces={false}
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
  },

});

AppRegistry.registerComponent('RNWebkitDemo', () => RNWebkitDemo);
