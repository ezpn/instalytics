import ApiService from '../common/api.service';

export default class GalleryService extends ApiService {
  constructor($http) {
    super($http);
    this.url = '/index_dev.php/api/gallery/';
  }

  getAll(params) {
    return this.$http.get(this.url, params);
  }
}

GalleryService.$inject = ['$http'];
