export default class LoginController {
  constructor($auth, loginService) {
    this.$auth = $auth;
    this.loginService = loginService;
  }

  authenticate(provider) {
    this.$auth.authenticate(provider)
      .then((response) => {
        this.loginService.storeToken(response.data);
      });
  }
}

LoginController.$inject = ['$auth', 'loginService'];
