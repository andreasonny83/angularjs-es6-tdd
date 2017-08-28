class AppController {
  constructor(AppService) {
    this.appService = AppService;

    AppService.appName = 'TDD App';
  }

  $onInit() {
    console.log('App Component started');

    this.appName = this.appService.appName;
  }
}

export default {
  template: require('./app.component.html'),
  controller: AppController,
}
