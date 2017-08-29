import { StateProvider } from 'angular-ui-router';

export default function AppRouter(
    $stateProvider,
  ) {
    'ngInject';

    $stateProvider
      .state('app', {
        url: '/',
        component: 'cmpApp',
      });
}
