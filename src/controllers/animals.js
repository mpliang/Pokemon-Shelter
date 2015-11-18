app.controller('animalController', function ($scope, $http, $state) {
  $scope.message = 'Which one of these cute Pokemon will you adopt?';

  $scope.adopt = function(id) {
    console.log('adopted');
    console.log(id);
    $http.put(url + 'animals/' + id + '/toggle')
      .then(function(data){
        console.log(data);
        $state.go($state.current, {}, {reload: true});
      })
      .catch(function(error){
        console.log(error);
      });
  }

  $http.get(url + 'animals/')
    .then(function(data){
      console.log(data);
      console.log(data.data);
      mixpanel.track("Pokemon list retrieved");
      $scope.pokemonlist = data.data;
    })
    .catch(function(error){
      console.log(error);
    })
});
