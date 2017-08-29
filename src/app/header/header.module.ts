import * as angular from 'angular';
import { HeaderComponent } from './header.component';

angular
  .module('app.header', [])
  .component('appHeader', new HeaderComponent())
