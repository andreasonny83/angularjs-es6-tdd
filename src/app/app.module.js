import 'angular-ui-router';
import AppComponent from './app.component';
import AppRouter from './app.router';
import AppRun from './app.run';
import AppService from './app.service';
import './header/header.module';
import './footer/footer.module';

angular
  .module('app.module', [
    'ui.router',
    'app.header',
    'app.footer',
  ])
  .component('cmpApp', AppComponent)
  .service('AppService', AppService)
  .config(AppRouter)
  .run(AppRun);
