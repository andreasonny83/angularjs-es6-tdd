import * as angular from 'angular';

const template = `<p>I'm supposed to be a footer</p>`;

class FooterController {
  constructor(FooterService) {
    this.$footerService = FooterService;
  }

  $OnInit() {
    this.appName = this.FooterService.appName;
  }
}

export default {
  bindings: {},
  template: template,
  controller: FooterController
};
