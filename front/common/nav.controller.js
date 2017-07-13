export default class NavController {
  constructor($scope, loginService) {
    this.isLoggedIn = loginService.isLoggedIn;
    loginService.subscribe((isLoggedIn) => this.isLoggedIn = isLoggedIn);
  }
}

NavController.$inject = ['$scope', 'loginService'];
