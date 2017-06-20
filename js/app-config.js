define([
    'domReady!',
    'states/campaigns',
    'states/search-details',
    'utils/constants',
    'controllers/application',
    'providers/http'
  ], function(document, SearchDetailsState,CampaignsState, Constants) {

  SearchFlicker.run(function($rootScope, $state) {
        event.preventDefault(); 
        $state.go("search-details");
  });

  SearchFlicker.config(function($stateProvider, $urlRouterProvider, $httpProvider,  $provide) {
    $stateProvider
      .state('search-details', SearchDetailsState)
      .state('campaigns', CampaignsState)
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
    //Control all ajax request/responses
    $httpProvider.interceptors.push('HttpInterceptor');
  });
});