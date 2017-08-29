export default function RoutingConfig(
    $locationProvider,
    $urlRouterProvider,
    $stateProvider,
  ) {
    'ngInject';

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
}
