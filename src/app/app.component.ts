import * as angular from 'angular';
import AppService from './app.service';

interface IAppComponentController {
  $onInit(): void;
}

class AppComponentController implements IAppComponentController {
  public appName: string;
  private appService: AppService;

  constructor(
    private AppService: AppService,
  ) {
    'ngInject';

    this.appService = AppService;
  }

  $onInit() {
    console.log('App Component started');

    this.appService.appName = 'TDD App';

    this.appName = this.appService.appName;
  }
}

export class AppComponent implements ng.IComponentOptions {
  public controller: any;
  public template: string;

  constructor() {
    this.controller = AppComponentController;
    this.template = require('./app.component.html');
  }
}
