app.controller('addTrainerController', function ($scope, $http, $state) {
  $scope.message = 'New Trainer Form';

  $scope.add = function(trainer) {
    console.log(trainer);
    $http.post(url + 'trainers', trainer)
      .then(function(data){
        console.log(data);
        $state.go('trainers');
      })
      .catch(function(error){
        console.log(error);
      })
  };
});
