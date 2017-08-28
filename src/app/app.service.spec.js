import angular from 'angular';
import 'angular-mocks';
import AppService from './app.service';

describe('App Service', () => {
  let service;

  /**
   * Create a test app in where testing the service
   */
  beforeEach(() => {
    angular
      .module('test.app', [])
      .service('AppService', AppService);
  });

  beforeEach(() => {
    angular.mock.module('test.app');

    angular.mock.inject((_AppService_) => {
      service = _AppService_;
    });
  });

  it('appName should be initially undefined', () => {
    expect(service.appName).toBeUndefined();
  });

  it('should set an appName', () => {
    service.appName = 'test app';

    expect(service.appName).not.toBeUndefined();
    expect(service.appName).toBe('test app');
  });
});