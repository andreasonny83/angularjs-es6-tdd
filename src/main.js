import angular from 'angular';
import './app.module';

angular
  .module('app', [
    'app.module',
  ]);

angular.element(() => {
  angular.bootstrap(document, ['app']);
});