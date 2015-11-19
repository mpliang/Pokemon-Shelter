app.controller('addTrainerController', function ($scope, $http, $state) {
  $scope.message = 'New Trainer Form';

  $scope.add = function(trainer) {
    console.log(trainer);
    $http.post(url + 'trainers', trainer)
      .then(function(data){
        console.log(data);
        swal({
          title: "Success",
          text: "You have successfully added " + data.data.name +"!",
          type: "success",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Ok!",
          closeOnConfirm: true
        }, function () {
          $state.go('trainers');
        });
      })
      .catch(function(error){
        console.log(error);
      })
  };
});
