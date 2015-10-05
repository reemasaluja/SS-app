'use strict';

window.CNC_APP.config(function(stateHelperProvider) {

    stateHelperProvider
      .state({
        name: 'root',
        template: '<ui-view/>',
        children:[
          {
            name: 'balance',
            url: '^/balance',
            templateUrl: 'views/cnc-data-table.html'
          },
          {
            name: 'soi',
            url: '^/soi',
            templateUrl: 'views/cnc-fund-hierarchy-table.html'
          }
        ]
      });
    })
  .run(['$rootScope', '$state',
    function($rootScope, $state) {
      console.log('Application started');
      $state.currentState = $state.current.name;
      $rootScope.$on('$stateChangeSuccess', function (ev, to,from) {
        $state.currentState = to.name;
        $state.previousState = from.name; 
      });
     
    }
]);