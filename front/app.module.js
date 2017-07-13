import _ from 'lodash';
import angular from 'angular';
import satellizer from 'satellizer'
import routing from './app.routing';
import auth from './app.auth';
import uirouter from '@uirouter/angularjs';

import common from './common';
import login from './login';
import home from './home';
import gallery from './gallery';
import contact from './contact';

const photostoryApp = angular.module('photostoryApp', [
  uirouter,
  satellizer,
  login,
  common,
  home,
  gallery,
  contact,
])
  .config(routing)
  .config(auth);
