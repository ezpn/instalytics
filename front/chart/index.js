import angular from 'angular';

import ChartService from './chart.service';

export default angular.module('app.chart', [])
  .service('chartService', ChartService)
  .name;
