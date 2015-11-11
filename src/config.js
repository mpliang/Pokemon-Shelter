app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './pages/home.html',
      controller: 'mainController'
    })
    .state('add', {
      url: '/add',
      templateUrl: './pages/add.html',
      controller: 'addController'
    })
    .state('animals', {
      url: '/animals',
      templateUrl: './pages/animals.html',
      controller: 'animalController'
    })
    .state('addTrainers', {
      url: '/addTrainers',
      templateUrl: './pages/addTrainers.html',
      controller: 'addTrainerController'
    })
    .state('trainers', {
      url: '/trainers',
      templateUrl: './pages/trainers.html',
      controller: 'trainerController'
    })
    .state('trainerShow', {
      url: '/trainers/:trainerId',
      templateUrl: './pages/show.html',
      controller: 'showController'
    })

});
