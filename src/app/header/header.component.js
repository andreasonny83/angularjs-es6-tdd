export default {
  bindings: {
    cmpTitle: '@',
  },

  template: require('./header.component.html'),

  controller: class HeaderComponent {
    constructor() {
      this.title;
    }

    $onInit () {
      this.title = this.cmpTitle;
    }
  },
};
