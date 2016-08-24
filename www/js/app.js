// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
      .state('index', {
        url: "/index",
        templateUrl: "index.html",
        controller: 'MenuCtrl'
      }).state('lunes', {
        url: "/lunes",
        templateUrl: "templates/lunes.html",
        controller: 'MenuCtrl'
      }).state('martes', {
        url: "/martes",
        templateUrl: "templates/martes.html",
        controller: 'MenuCtrl'
      }).state('miercoles', {
        url: "/miercoles",
        templateUrl: "templates/miercoles.html",
        controller: 'MenuCtrl'
      }).state('jueves', {
        url: "/jueves",
        templateUrl: "templates/jueves.html",
        controller: 'MenuCtrl'
      }).state('viernes', {
        url: "/viernes",
        templateUrl: "templates/viernes.html",
        controller: 'MenuCtrl'
      }).state('sabado', {
        url: "/sabado",
        templateUrl: "templates/sabado.html",
        controller: 'MenuCtrl'
      }).state('domingo', {
        url: "/domingo",
        templateUrl: "templates/domingo.html",
        controller: 'MenuCtrl'
      }).state('lunes_2', {
        url: "/lunes_2",
        templateUrl: "templates/lunes_2.html",
        controller: 'MenuCtrl'
      }).state('martes_2', {
        url: "/martes_2",
        templateUrl: "templates/martes_2.html",
        controller: 'MenuCtrl'
      }).state('miercoles_2', {
        url: "/miercoles_2",
        templateUrl: "templates/miercoles_2.html",
        controller: 'MenuCtrl'
      }).state('jueves_2', {
        url: "/jueves_2",
        templateUrl: "templates/jueves_2.html",
        controller: 'MenuCtrl'
      }).state('viernes_2', {
        url: "/viernes_2",
        templateUrl: "templates/viernes_2.html",
        controller: 'MenuCtrl'
      }).state('sabado_2', {
        url: "/sabado_2",
        templateUrl: "templates/sabado_2.html",
        controller: 'MenuCtrl'
      }).state('domingo_2', {
        url: "/domingo_2",
        templateUrl: "templates/domingo_2.html",
        controller: 'MenuCtrl'
      });

      $urlRouterProvider.otherwise("/index");
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });
}).controller('MenuCtrl', function($scope, $state){

  if($state.current.name == 'index'){
    var day = new Date();
    var weekDay = day.getDay();

    $scope.day_one_class = "";
    $scope.day_two_class = "";
    $scope.day_three_class = "";
    $scope.day_four_class = "";
    $scope.day_five_class = "";
    $scope.day_six_class = "";
    $scope.day_seven_class = "";
    
    if(weekDay == 1){
      $scope.day_one_class = "marked";
    }
    if(weekDay == 2){
      $scope.day_two_class = "marked";
    }
    if(weekDay == 3){
      $scope.day_three_class = "marked";
    }
    if(weekDay == 4){
      $scope.day_four_class = "marked";
    }
    if(weekDay == 5){
      $scope.day_five_class = "marked";
    }
    if(weekDay == 6){
      $scope.day_six_class = "marked";
    }
    if(weekDay == 7){
      $scope.day_seven_class = "marked";
    }
  }

  $scope.goto=function(toState){
    $state.go(toState);
  }

});