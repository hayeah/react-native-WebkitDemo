An experiment of using ReactNative as HTML5 hybrid wrapper, in place of PhoneGap.

# iOS

The `react-js-navigation` custom URL scheme prevents a page from loading. It triggers the `onNavigationStateChange` event.

Use this to trigger native actions or view transition.

Could also capture current URL of there's navigation in the WebView HTML5 app.

# Android

Allow Android virtual machine to read from port 8080 of development machine by creating a reverse proxy:

```
adb reverse tcp:8080 tcp:8080
```

Hmmm. Android's side is still a piece of crap.

There's no custom url scheme, but a hack is to use the url hash to send trigger `onNavigationStateChange`. This could trigger a view change or whatever.


+ need to figure out how to compile ReactNative Android.


## Android Problems

+ Double loading: 393adacfa61d6500f8ad285ed136320cf713fcbd
  + wtf? It does happen, and randomly.
+ Custom URL scheme is not yet implemented:

```
public void setUrl(WebView view, @Nullable String url) {
  if(url != null) {
      view.loadUrl(url);
  } else {
      view.loadUrl("about:blank");
  }
}
```

Could maybe override url loading? Or it's probably easier to modify setUrl, since it interfaces with React property setting.

```
WebViewClient.shouldOverrideUrlLoading
```


# Message Bridge

Right now you could sort of communicate with the ReactNative side from WebView by changing (and detecting) URL changes.

People have experimented with a message passing bridge:

https://github.com/facebook/react-native/issues/586
https://github.com/alinz/react-native-webview-bridge

No idea if it's any good.

