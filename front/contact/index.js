import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './contact.routes';
import ContactController from './contact.controller';

export default angular.module('app.contact', [uirouter])
  .config(routing)
  .controller('ContactController', ContactController)
  .name;
