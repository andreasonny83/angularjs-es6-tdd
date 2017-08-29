import * as angular from 'angular';
import 'angular-ui-router';
import { AppComponent } from './app.component';
import AppRouter from './app.router';
import AppRun from './app.run';
import AppService from './app.service';
import './header/header.module';

angular
  .module('app.module', [
    'ui.router',
    'app.header'
  ])
  .component('cmpApp', new AppComponent())
  .service('AppService', AppService)
  .config(AppRouter)
  .run(AppRun);
