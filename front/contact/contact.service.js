import ApiService from '../common/api.service';

export default class ContactService extends ApiService {
  constructor($http) {
    super($http);
    this.url = '/index_dev.php/api/contact/';
  }
}

ContactService.$inject = ['$http'];
