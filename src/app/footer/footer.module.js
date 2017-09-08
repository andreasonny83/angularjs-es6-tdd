import * as angular from 'angular';
import FooterComponent from './footer.component';
import FooterService from './footer.service';

angular.module('app.footer', [])
  .component('footerCmp', FooterComponent)
  .service('FooterService', FooterService);
