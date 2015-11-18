app.controller('addController', function ($scope, $http, $state) {
  $scope.message = 'to our adoption database!';
  $scope.add = function(pokemon) {
    $http.post(url+ 'animals', pokemon)
      .then(function(data){
        console.log(data);
        mixpanel.track("Pokemon added");
      })
      .catch(function(error){
        console.log(error);
      });
      $state.go($state.current, {}, {reload: true});
  }
});
