import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './gallery.routes';
import GalleryController from './gallery.controller';

export default angular.module('app.gallery', [uirouter])
  .config(routing)
  .controller('GalleryController', GalleryController)
  .name;
