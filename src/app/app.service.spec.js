import angular from 'angular';
import 'angular-mocks';
import './app.module';

describe('App Service', () => {
  let service;

  beforeEach(angular.mock.module('app.module'));

  beforeEach(angular.mock.inject((_AppService_) => {
    service = _AppService_;
  }));

  it('appName should be initially undefined', () => {
    expect(service.appName).toBeUndefined();
  });

  it('should set an appName', () => {
    service.appName = 'test app';

    expect(service.appName).not.toBeUndefined();
    expect(service.appName).toBe('test app');
  });
});
