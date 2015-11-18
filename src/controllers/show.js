app.controller('showController', function ($scope, $http, $stateParams) {
  $scope.message = 'Trainer';
  console.log($stateParams);

  $http.get(url + 'trainers/' + $stateParams.trainerId)
    .then(function(data){
      console.log(data);
      mixpanel.track("Single trainer viewed");
      $scope.trainer = data.data;
    })
    .catch(function(error){
      console.log(error);
    });

    $http.get(url+ 'animals/')
      .then(function(data){
        console.log(data);
        mixpanel.track("Available animals list on single trainer page viewed");
        $scope.pokemonlist = data.data;
      })
      .catch(function(error){
        console.log(error);
      });

      $scope.adopt = function(pokemonId){
        console.log(url + $stateParams.trainerId + '/adopt/' + pokemonId);
        $http.put(url + 'trainers/' + $stateParams.trainerId + '/adopt/' + pokemonId)
          .then(function(data){
            mixpanel.track("pokemon adopted");
          })
          .catch(function(error){
            console.log(error);
          })
      }
});
