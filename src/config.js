app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './src/pages/home.html',
      controller: 'mainController'
    })
    .state('animals', {
      url: '/animals',
      templateUrl: './src/pages/animals.html',
      controller: 'animalController'
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
