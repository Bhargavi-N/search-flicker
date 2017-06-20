define([
  'lodash',
  'angular',
  'searchflicker'
], function() {
  SearchFlicker.factory('SearchDetailsService', function($q, $http, config) {
    return ({
      //To get shift details based on selected portfolio
      getImages: function(searchString) {
        var deferred = $q.defer();
        $http({
          method: "get",
          url: config.apiUrl+searchString
        }).
        success(function (data, status, headers, config) {
          deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {
          deferred.reject(data);
        });

        return deferred.promise;
      }
    });
  });
});