'use strict';

/**
 * @ngdoc overview
 * @name stateStreetPrototypeApp
 * @description
 * # stateStreetPrototypeApp
 *
 * Main module of the application.
 */
window.CNC_APP = angular
  .module('stateStreetPrototypeApp', [
    'ngRoute',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.moveColumns',
    'ui.grid.resizeColumns',
    'ui.grid.treeView',
    'ui.grid.grouping',  
    'ui.grid.selection',
    'ui.router',
    'mm.foundation', 
    'ui.router.stateHelper'
  ]);
