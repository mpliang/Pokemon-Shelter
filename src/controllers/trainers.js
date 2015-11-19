app.controller('trainerController', function ($scope, $http, $state) {
  $scope.message = 'Trainer List';


  $http.get(url + 'trainers/')
    .then(function (data) {
      console.log(data);
      mixpanel.track("trainer list fetched");
      $scope.trainerList = data.data;
    })
    .catch(function (error) {
      console.log(error);
    })

  $scope.add = function (trainer) {
    console.log(trainer);
    $http.post(url + 'trainers', trainer)
      .then(function (data) {
        console.log(data);
        swal({
          title: "Success",
          text: "You have successfully added " + data.data.name + "!",
          type: "success",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Ok!",
          closeOnConfirm: true
        }, function () {
          var $modal = $('#addModal');
          $modal.on('hidden.bs.modal', function (e) {
            location.reload();
            return this.render(); //DOM destroyer
          });
          $modal.modal('hide');
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  $scope.edit = function (id) {
    $http.get(url + 'trainers/' + id)
      .then(function (data) {
        console.log(data);
        mixpanel.track("Single trainer viewed");
        $scope.trainer = data.data


        text: "You have successfully deleted " + data.data.name + "!",

          $scope.delete = function (id) {
            swal({
              title: "Are you sure?",
              type: "error",
              showCancelButton: true,
              confirmButtonColor: "#dd6b55",
              confirmButtonText: "Yes, delete " + data.data.name + "!",
              cancelButtonText: "Cancel",
              closeOnConfirm: false,
              closeOnCancel: false
            }, function (isConfirm) {
              if (isConfirm) {
                $http.delete(url + 'trainers/' + id)
                  .then(function (data) {
                    mixpanel.track("trainer deleted");
                    swal({
                      title: "Deleted!",
                      text: "You have successfully deleted " + data.data.name + "!",
                      type: "success"
                    }, function () {
                      var $modal = $('#myModal');
                      $modal.on('hidden.bs.modal', function (e) {
                        location.reload();
                        return this.render();
                      });
                      $modal.modal('hide');
                    });
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              } else {
                swal("Cancelled", data.data.name + " is still safe!", "error");
              }

            });
          }

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  $scope.update = function (trainer) {
    $http.put(url + 'trainers/update', trainer)
      .then(function (data) {
        console.log(data.data);
        swal({
          title: "Success",
          text: data.data.name + " has successfully been successfully updated!",
          type: "success",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Ok!",
          closeOnConfirm: true
        }, function () {
          mixpanel.track("trainer updated");
          var $modal = $('#myModal');
          $modal.on('hidden.bs.modal', function (e) {
            location.reload();
            return this.render();
          });
          $modal.modal('hide');
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }


});
