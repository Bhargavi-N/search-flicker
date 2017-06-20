define([
  'services/search-details',
  'searchflicker'
  ], 
  function() {
  SearchFlicker.controller('SearchDetailsController', function($scope, $state, $stateParams, $http, SearchDetailsService) {
    $scope.serachImages = function(detailsForm) {
      var searchstring = this.searchstring;   
      SearchDetailsService.getImages(searchstring).then(function(response){
      if(response && response.photos){
        $scope.searchList = response.photos;    
      } else{
        $scope.errorMessage = "Something went wrong or no search reults";
      }                 
    }, function(error) { 
      if(error){
        $scope.errorMessage = "Something went wrong or no search reults";
      }     
    });
    }
  })
});