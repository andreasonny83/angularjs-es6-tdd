export default AppConfig;

function AppConfig(
    $stateProvider,
  ) {
    $stateProvider
      .state('app', {
        url: '/',
        component: 'cmpApp',
      });
}
