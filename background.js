/* global chrome */
chrome.app.runtime.onLaunched.addListener(function(launchData) {
  'use strict';
  chrome.app.window.create('index.html', {
    bounds: {
        width: 430,
        height: 520
      }
    }, function(win) {
      win.contentWindow.launchData = launchData;
  });
});
