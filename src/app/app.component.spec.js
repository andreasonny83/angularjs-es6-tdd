import angular from 'angular';
import 'angular-mocks';
import './app.module';

describe('App component', () => {
  let scope;
  let $componentController;
  let controller;
  let element;
  let component;

   beforeEach(angular.mock.module('app.module'));

  /**
   * Create the cmpApp element and controller
   */
  beforeEach(
  inject(($rootScope, $compile, _$componentController_) => {
    scope = $rootScope.$new();
    $componentController = _$componentController_;

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
