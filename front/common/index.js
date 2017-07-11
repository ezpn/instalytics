import angular from 'angular';
import './common.scss'

import ApiService from './api.service';

export default angular.module('app.common', [])
  .service('apiService', ApiService)
  .name;
