export default class LoginService {
  constructor($state, $timeout) {
    this.localStorageKey = 'photoStory.instagram.jwt';
    this.observerCallbacks = [];
    this.$state = $state;
    this.$timeout = $timeout;
    this.setIsLoggedIn(this.checkAuth());
  }

  setIsLoggedIn(isLoggedIn) {
    if (this.isLoggedIn != isLoggedIn) {
      this.isLoggedIn = isLoggedIn;
      this.notify();
    }
  }

  subscribe(cb) {
    this.observerCallbacks.push(cb);
  }

  unsubscribe(cb) {
    const cbIdx = this.observerCallbacks.indexOf(cb);

    if (!~cbIdx) {
      this.observerCallbacks.remove(cbIdx);
    }
  }

  notify() {
    this.observerCallbacks.forEach((cb) => {
      return cb(this.isLoggedIn);
    })
  }

  authenticate() {
    if (!this.isLoggedIn) {
      return this.$timeout(() => this.redirectToLogin);
    }

    return Promise.resolve();
  }

  logout() {
    localStorage.removeItem(this.localStorageKey);
    this.setIsLoggedIn(false);

    // @todo Fix gallery protection!

    return this.$state.go('home');
  }

  redirectToLogin() {
    return this.$state.go('login');
  }

  checkAuth() {
    const jwt = localStorage.getItem(this.localStorageKey);

    return jwt != null;
  }

  login(token) {
    this.storeToken(token);
    this.setIsLoggedIn(true);
    console.log('Im logged in');
  }

  storeToken(token) {
    localStorage.setItem(this.localStorageKey, token);
  }
}

LoginService.$inject = ['$state', '$timeout'];
