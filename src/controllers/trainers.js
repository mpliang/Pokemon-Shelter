app.controller('trainerController', function ($scope, $http, $state) {
  $scope.message = 'Trainer List';

  $scope.delete = function(id) {
    $http.delete(url + 'trainers/' + id)
      .then(function(data){
        mixpanel.track("trainer deleted");
        $state.go($state.current, {}, {reload: true});
      })
      .catch(function(error){
        console.log(error);
      })
  }

  $http.get(url + 'trainers/')
    .then(function(data){
      console.log(data);
      mixpanel.track("trainer list fetched");
      $scope.trainerList = data.data;
    })
    .catch(function(error){
      console.log(error);
    })
});
