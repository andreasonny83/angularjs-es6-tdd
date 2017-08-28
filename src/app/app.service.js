export default class AppService {
  constructor() {
    this._appName;
  }

  set appName(val) {
    this._appName = val;
  }
  get appName() {
    return this._appName;
  }
}
