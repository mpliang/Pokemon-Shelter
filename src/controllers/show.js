app.controller('showController', function ($scope, $http, $stateParams, $state) {
  $scope.message = 'Trainer';

  $http.get(url + 'trainers/' + $stateParams.trainerId)
    .then(function (data) {
      console.log(data);
      mixpanel.track("Single trainer viewed");
      $scope.trainer = data.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  $http.get(url + 'animals/')
    .then(function (data) {
      console.log(data);
      mixpanel.track("Available animals list on single trainer page viewed");
      $scope.pokemonlist = data.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  $scope.adopt = function (pokemonId) {
    $http.put(url + 'trainers/' + $stateParams.trainerId + '/adopt/' + pokemonId)
      .then(function (data) {
        console.log(data.data);
        swal({
          title: "Success",
          text: data.data.name + " has successfully adopted a new pokemon!",
          type: "success",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Ok!",
          closeOnConfirm: true
        }, function () {
        });
        mixpanel.track("pokemon adopted");
        $state.go($state.current, {}, {
          reload: true
        });
      })
      .catch(function (error) {
        console.log(error);
        swal({
          title: "Error",
          text: "Oops, Something went wrong.",
          type: "error",
          confirmButtonColor: "#dd6b55",
          confirmButtonText: "Ok!",
          closeOnConfirm: true
        });
      })
  }
});
