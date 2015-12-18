// Embeds the web page as the application.
angular.module('starter', ['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    var url = "http://www.10.90.135.95.xip.io:8080";
    var ref = window.open(url, "_self");
  });
});
