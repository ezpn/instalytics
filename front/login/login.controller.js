export default class LoginController {
  constructor($auth, $state, loginService) {
    this.$auth = $auth;
    this.$state = $state;
    this.loginService = loginService;
  }

  authenticate(provider) {
    this.$auth.authenticate(provider)
      .then((response) => {
        this.loginService.login(response.data);
      })
      .then(() => {
        // Previous state should be saved
        this.$state.go('gallery');
      });
  }
}

LoginController.$inject = ['$auth', '$state', 'loginService'];
