import { AppComponent } from './app.component';

angular
  .module('app.module', [])
  .component('cmpApp', {
    template: require('./app.component.html'),
    controller: AppComponent,
  });
