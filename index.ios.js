/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
} = React;

var RNWebkitDemo = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <WebView
          url="http://localhost:8080/"
          bounces={false}
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
