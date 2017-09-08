export default class FooterService {
  constructor($http) {
    this.$http = $http;
    this.appName = 'My App';
    this._contactUrl = null;
  }

  get contactUrl() {
    return this._contactUrl;
  }
  set contactUrl(val) {
    this._contactUrl = val;
  }

  fetch() {
    return this.$http.get('http://example.com/rest/hello-world')
      .then((res) => {
        return res.data;
      });
  }

}
