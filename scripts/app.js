'use strict';

/**
 * @ngdoc overview
 * @name PrototypeApp
 * @description
 * # PrototypeApp
 *
 * Main module of the application.
 */
window.CNC_APP = angular
  .module('PrototypeApp', [
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
