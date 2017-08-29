import * as angular from 'angular';
import 'angular-ui-router';
import RoutingConfig from './routing.config';
import './app/app.module';

const app: ng.IModule = angular
  .module('app', [
    'ui.router',
    'app.module',
  ])
  .config(RoutingConfig);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
