export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('people', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('person', {
      url: '/person/:id',
      templateUrl: 'app/person/person.html',
      controller: 'PersonController',
      controllerAs: 'person'
    });

  $urlRouterProvider.otherwise('/');
}
