export default class ApiService {
  constructor($http) {
    this.$http = $http;
  }

  post(data) {
    return this.$http.post(this.url, data);
  }

  put(id, data) {
    return this.$http.put(`${this.url}${id}`, data);
  }

  patch(id, data) {
    return this.$http.patch(`${this.url}${id}`, data);
  }

  get(id) {
    return this.$http.get(`${this.url}${id}`);
  }

  getAll() {
    return this.$http.get(this.url);
  }

  delete(id) {
    return this.$http.delete(`${this.url}${id}`);
  }
}

ApiService.$inject = ['$http'];
