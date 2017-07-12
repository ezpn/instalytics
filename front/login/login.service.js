export default class LoginService {
  constructor($state, $timeout) {
    this.localStorageKey = 'photoStory.instagram.jwt';
    this.$state = $state;
    this.$timeout = $timeout;
  }

  authenticate() {
    if (!this.checkAuth()) {
      return this.$timeout(() => this.$state.go('login'));
    }

    return Promise.resolve();
  }

  checkAuth() {
    const jwt = localStorage.getItem(this.localStorageKey);

    return jwt != null;
  }

  storeToken(token) {
    localStorage.setItem(this.localStorageKey, token);
  }
}

LoginService.$inject = ['$state', '$timeout'];
