app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './src/pages/home.html',
      controller: 'mainController'
    })
    .state('add', {
      url: '/add',
      templateUrl: './src/pages/add.html',
      controller: 'addController'
    })
    .state('animals', {
      url: '/animals',
      templateUrl: './src/pages/animals.html',
      controller: 'animalController'
    })
    .state('addTrainers', {
      url: '/addTrainers',
      templateUrl: './src/pages/addTrainers.html',
      controller: 'addTrainerController'
    })
    .state('trainers', {
      url: '/trainers',
      templateUrl: './src/pages/trainers.html',
      controller: 'trainerController'
    })
    .state('trainerShow', {
      url: '/trainers/:trainerId',
      templateUrl: './src/pages/show.html',
      controller: 'showController'
    })

});
