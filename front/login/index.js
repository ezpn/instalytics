import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './login.routes';
import LoginController from './login.controller';
import LoginService from './login.service';

export default angular.module('app.login', [uirouter])
  .config(routing)
  .service('loginService', LoginService)
  .controller('LoginController', LoginController)
  .name;
