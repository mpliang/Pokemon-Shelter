app.controller('animalController', function ($scope, $http, $state) {
  $scope.message = 'Which one of these cute Pokemon will you adopt?';

  $scope.adopt = function(id) {
    console.log('adopted');
    console.log(id);
    $http.put('https://pokemon-shelter.herokuapp.com/animals/' + id + '/toggle')
      .then(function(data){
        console.log(data);
        $state.go($state.current, {}, {reload: true});
      })
      .catch(function(error){
        console.log(error);
      });
  }

  $http.get('https://pokemon-shelter.herokuapp.com/animals/')
    .then(function(data){
      console.log(data);
      console.log(data.data);
      $scope.pokemonlist = data.data;
    })
    .catch(function(error){
      console.log(error);
    })
});
