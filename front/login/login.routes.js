routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      template: require('./login.html'),
      controller: 'LoginController',
      controllerAs: 'login',
    })
    .state('accessToken', {
      url: '/login/access_token=:accessToken',
      template: require('./login.html'),
      controller: 'LoginController',
      controllerAs: 'login',
    });
}
