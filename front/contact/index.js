import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './contact.routes';
import ContactController from './contact.controller';
import ContactService from './contact.service';

export default angular.module('app.contact', [uirouter])
  .config(routing)
  .service('contactService', ContactService)
  .controller('ContactController', ContactController)
  .name;
