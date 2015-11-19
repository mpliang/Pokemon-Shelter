app.controller('addController', function ($scope, $http, $state) {
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
});
