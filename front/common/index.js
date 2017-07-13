import angular from 'angular';
import './common.scss'

import ApiService from './api.service';
import NavController from './nav.controller';

export default angular.module('app.common', [])
  .service('apiService', ApiService)
  .controller('NavController', NavController)
  .name;
