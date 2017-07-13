routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      template: require('./login.html'),
      controller: 'LoginController',
      controllerAs: 'login',
    })
    .state('logout', {
      url: '/logout',
      controller: 'LogoutController',
      controllerAs: 'logout',
    });
}
