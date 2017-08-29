interface IHeaderController {
  title: string;
  cmpTitle: string;
  $onInit (): void;
}

class HeaderController implements IHeaderController {
  public title: string;
  public cmpTitle: string;

  constructor() {
    'ngInject';
  }

  $onInit () {
    console.log('Header Component started');

    this.title = this.cmpTitle;
  }
}

export class HeaderComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;

  constructor() {
    this.bindings = {
      cmpTitle: '@',
    };
    this.controller = HeaderController;
    this.template = require('./header.component.html');
  }
}
