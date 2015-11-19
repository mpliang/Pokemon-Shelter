app.controller('animalController', function ($scope, $http, $state) {
  $scope.message = 'Which one of these cute Pokemon will you adopt?';

  $scope.add = function (pokemon) {
    $http.post(url + 'animals', pokemon)
      .then(function (data) {
        console.log(data);
        mixpanel.track("Pokemon added");
        swal({
          title: "Success",
          text: "You have successfully added " + data.data.name + " to the adoption database!",
          type: "success",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Ok!",
          closeOnConfirm: true
        }, function () {
          $state.go('animals');
        });
      })
      .catch(function (error) {
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
