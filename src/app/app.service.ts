export default class AppService {
  private _appName: string;

  constructor() {
    'ngInject';

    this._appName;
  }

  set appName(val) {
    this._appName = val;
  }
  get appName() {
    return this._appName;
  }
}
