app.controller('addTrainerController', function ($scope, $http, $state) {
  $scope.message = 'New Trainer Form';

  $scope.add = function(trainer) {
    console.log(trainer);
    $http.post('https://pokemon-shelter.herokuapp.com/trainers', trainer);
    $state.go($state.current, {}, {reload: true});
  };
});
