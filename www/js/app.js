// Note that for Facebook authentication to work, this must be the same as in Facebook app settings.
var SERVER_IP = "178.217.128.133";

// Embeds the web page as the application.
angular.module('starter', ['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    var url = "http://www." + SERVER_IP + ".xip.io:8080";
    var ref = window.open(url, "_self");
  });
});
