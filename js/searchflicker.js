define([
    'angular',
    'angular-ui-router',
    'textAngular-sanitize',
    'textAngular',
    'angular-ui-bootstrab',
    'ngIdle',
    'angular-dialog'
  ], function() {
  var SearchFlicker = angular.module('searchflicker', ['ui.router', 'ui.bootstrap', 'ui.select', 'textAngular', 
    'ngSanitize', 'ngIdle', 'dialogs.main']);

  window.SearchFlicker = SearchFlicker;
  return SearchFlicker;
});