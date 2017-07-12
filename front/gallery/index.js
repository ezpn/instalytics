import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './gallery.routes';
import GalleryController from './gallery.controller';
import GalleryService from './gallery.service';

export default angular.module('app.gallery', [uirouter, 'app.login'])
  .config(routing)
  .service('galleryService', GalleryService)
  .controller('GalleryController', GalleryController)
  .name;
