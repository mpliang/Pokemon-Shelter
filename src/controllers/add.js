app.controller('addController', function ($scope, $http, $state) {
  $scope.message = 'to our adoption database!';
  $scope.add = function(pokemon) {
    $http.post(url+ 'animals', pokemon)
      .then(function(data){
        console.log(data);
        mixpanel.track("Pokemon added");
        $state.go('animals');
      })
      .catch(function(error){
        console.log(error);
      });
  }
});
