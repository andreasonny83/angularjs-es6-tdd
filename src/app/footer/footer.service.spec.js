import * as angular from 'angular';
import 'angular-mocks';
import './footer.module';

describe('FooterService', () => {
  let service;
  let $httpBackend;

  beforeEach(angular.mock.module('app.footer'));

  beforeEach(angular.mock.inject((FooterService) => {
    service = FooterService;
  }));

  beforeEach(inject(function (_$httpBackend_) {
    $httpBackend = _$httpBackend_;
  }));

  it('should have an app name', () => {
    expect(service.appName).toBeDefined();
    expect(service.appName).toBe('My App');
  });

  it('should return a contact url', () => {
    expect(service.contactUrl).toBeNull();

    service.contactUrl = 'http://www.test.com';

    expect(service.contactUrl).toBe('http://www.test.com');
  });

  it('should correctly fetch a json from an url', () => {
    $httpBackend
      .expectGET(service.contactUrl)
      .respond({ status: 200 });

    let response = service.fetch(service.contactUrl)
      .then((res) => {
        expect(res).toEqual({ status: 200 });
      });

    $httpBackend.flush();
  });

  it('should fail the http request when the server is down', () => {
    $httpBackend
      .expectGET(service.contactUrl)
      .respond({ status: 500 });

    let response = service.fetch(service.contactUrl)
      .then((res) => {
        expect(res).toEqual({ status: 500 });
      });

    $httpBackend.flush();
  });
})
