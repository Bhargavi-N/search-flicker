define([
  'searchflicker',
  'lodash'
  ], function() {
  SearchFlicker.controller('applicationCtrl', function($rootScope,$state, $scope, $location, $idle, $keepalive, $modal, config) {
    $scope.config = config;

    //Site Navigation List
    var navs = [
      { url: '/', title: 'search flicker images'}
    ];

   
    $rootScope.$on('ajaxLoader', function(event, status) {
      //Reset all the errors 
      if(!status) {
        $scope.alerts = [];
      }
      $scope.ajaxLoader = status;
    });

    $rootScope.$on('responseError', function(event, error) {
      if(error.status == 0) {
        error.data = {message: 'Oops, it seems communication with server is lost'};
      } else if(_.isEmpty(error.data)) {
        error.data = {message: 'Oops, Something went wrong. Try again'};
      }

      $scope.addAlert('warning', error.data.message);
      $('html, body').animate({scrollTop : 0}, 500);
    });

  });
});