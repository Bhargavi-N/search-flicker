define([
    'domReady!',
    'states/images',
    'states/search-details',
    'utils/constants',
    'controllers/application',
    'providers/http'
  ], function(document, SearchDetailsState,ImagesState, Constants) {

  SearchFlicker.run(function($rootScope, $state) {
        event.preventDefault(); 
        $state.go("search-details");
  });

  SearchFlicker.config(function($stateProvider, $urlRouterProvider, $httpProvider,  $provide) {
    $stateProvider
      .state('search-details', SearchDetailsState)
      .state('images', ImagesState)
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
    //Control all ajax request/responses
    $httpProvider.interceptors.push('HttpInterceptor');
  });
});