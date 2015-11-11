app.controller('addController', function ($scope, $http, $state) {
  $scope.message = 'to our adoption database!';
  $scope.add = function(pokemon) {
    $http.post('https://pokemon-shelter.herokuapp.com/animals', pokemon)
      .then(function(data){
        console.log(data);
      })
      .catch(function(error){
        console.log(error);
      });
      $state.go($state.current, {}, {reload: true});
  }
});
