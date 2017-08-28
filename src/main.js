import angular from 'angular';
import './app/app.module';
import RoutingConfig from './routing.config';

angular
  .module('app', [
    'ui.router',
    'app.module',
  ])
  .config(RoutingConfig);

angular.element(() => {
  angular.bootstrap(document, ['app']);
});