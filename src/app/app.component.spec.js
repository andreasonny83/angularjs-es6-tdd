import angular from 'angular';
import 'angular-mocks';
import AppComponent from './app.component';

class AppServiceStub {
  constructor() {
    this.appName;
  }
}

describe('App component', () => {
  let scope;
  let controller;
  let element;

  /**
   * Create a test app in where testing the component
   */
  beforeEach(() => {
    angular
      .module('test.app', [])
      .component('cmpApp', AppComponent);
  });

  beforeEach(() => {
    angular.mock.module('test.app', ($provide) => {
      $provide.service('AppService', AppServiceStub);
    });
  });

  /**
   * Create the cmpApp element and controller
   */
  beforeEach(
  inject(($rootScope, $compile, $componentController) => {
    scope = $rootScope.$new();

    element = angular.element('<cmp-app></cmp-app>');
    element = $compile(element)(scope);

    controller = $componentController('cmpApp', {}, { $scope: scope });

    scope.$apply();
  }));

  it('should have an appName', () => {
    const header = element.find('app-header');

    expect(controller.appName).toBeUndefined();

    controller.$onInit();

    expect(controller.appName).toEqual('TDD App');
    expect(header.length).toBe(1);
    expect(controller.appName).toBe('TDD App');
  });
});
