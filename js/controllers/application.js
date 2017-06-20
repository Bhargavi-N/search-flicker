define([
  'searchflicker',
  'lodash'
  ], function() {
  SearchFlicker.controller('applicationCtrl', function($rootScope,$state, $scope, $location, $idle, $keepalive, $modal, config) {
    $scope.config = config;
  });
});