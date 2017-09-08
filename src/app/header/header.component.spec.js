import angular from 'angular';
import 'angular-mocks';
import './header.module';

describe('HeaderComponent', () => {
  let scope;
  let component;
  let controller;

  beforeEach(angular.mock.module('app.header'));

  beforeEach(angular.mock.inject(($rootScope, $compile, $componentController) => {
    scope = $rootScope.$new();

    component = angular.element('<app-header cmp-title="test app"></app-header>');
    component = $compile(component)(scope);

    controller = $componentController('appHeader', {$scope: scope}, {cmpTitle: 'test app'});
    scope.$apply();
  }));

  it('should create a Header component', () => {
    const h1 = component.find('h1');
    expect(h1.text()).toBe('test app');
    expect(controller.cmpTitle).toBe('test app');
  });
});
