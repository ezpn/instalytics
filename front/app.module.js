import _ from 'lodash';
import angular from 'angular';
import routing from './app.config';
import uirouter from '@uirouter/angularjs';

import common from './common';
import home from './home';
import gallery from './gallery';
import contact from './contact';

const photostoryApp = angular.module('photostoryApp', [
  uirouter,
  common,
  home,
  gallery,
  contact,
])
  .config(routing);
