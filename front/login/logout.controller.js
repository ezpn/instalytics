export default class LogoutController {
  constructor(loginService) {
    loginService.logout();
  }
}

LogoutController.$inject = ['loginService'];
