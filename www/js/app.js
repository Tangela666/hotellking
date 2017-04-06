// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var registering = {
                  "checkinmonth": '', "checkindate": '',
                  "checkoutmonth": '', "checkoutdate": '',
                  "adult": '', "children": '', "bookking": '',
                  "firstname":'', "lastname":'', "phone":'', "email":''
                  };

angular.module('starter', ['ionic', 'ui.router'])

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
})

.controller('ListController', function($scope, $http, $state){
  $http.get('js/data.json').success(function(data){
   $scope.data = data;
   $scope.whichking = $state.params.aId;

  })  //avslutar success
  $scope.info = registering;


$scope.refresh = function() {
     location.href = location.origin;
   }




  $scope.setKing = function(king) {
     registering.bookking = king;
   }
}) // avslutar controller

.config(function($stateProvider, $urlRouterProvider) {
       $stateProvider
           
            .state('hem', {
                           
                           url: '/hem',
                           templateUrl: 'templates/hem.html'
                           
                       })
           .state('steg1', {
               url: '/steg1',
               templateUrl: 'templates/steg1.html'
           })
            .state('steg2', {
                           url: '/steg2',
                           templateUrl: 'templates/steg2.html'
                       })
            .state('steg3', {
                           url: '/steg2/:aId',
                           templateUrl: 'templates/steg3.html'
                       })
            .state('steg4', {
                           url: '/steg3/:aId',
                           templateUrl: 'templates/steg4.html',
                           controller: 'ListController'
                       })
            .state('steg5', {
                           url: '/steg5',
                           templateUrl: 'templates/steg5.html'
                           
                       })
       

$urlRouterProvider.otherwise('/hem');
});