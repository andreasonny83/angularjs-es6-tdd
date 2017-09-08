import * as angular from 'angular';
import 'angular-mocks';
import './footer.module';

describe('Footer component', () => {
  let scope;
  let component;
  let controller;

  class MockFooterService {
    constructor() {
      this.appName = 'test app';
    }
  }

  beforeEach(angular.mock.module('app.footer'));

  beforeEach(angular.mock.inject(($rootScope, $compile, $componentController) => {
    scope = $rootScope.$new();

    component = angular.element('<footer-cmp></footer-cmp>');
    component = $compile(component)(scope);

    controller = $componentController('footerCmp', {$scope: scope}, {});
    scope.$apply();
  }));

  it('the footer component is rendered', () => {
    expect(controller).toBeDefined();
    expect(component).toBeDefined();
  });
});
