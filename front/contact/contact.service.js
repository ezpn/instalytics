import ApiService from '../common/api.service';

export default class ContactService extends ApiService {
  constructor($http) {
    super($http);
    this.url = '/api/message';
  }
}

ContactService.$inject = ['$http'];
