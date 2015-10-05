'use strict';

angular.module('stateStreetPrototypeApp')
  .factory('dataService',['$rootScope','$timeout', function($rootScope,$timeout) {
    var tableData = {};

    //TODO
    /*var service = {};
  	var baseUrl = '';
  	var _artist = '';
  	var _finalUrl = '';

  	var makeUrl = function(){
  		_artist = _artist.split(' ').join('+');
  		_finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK';
  		return _finalUrl
  	}*/

    tableData.addTable = function(tableId, viewId){
        var params = {
        	tableId:tableId,
        	viewId:viewId
        };
        //Dispatcher to update table data on menu selection
        $timeout(function(){
          $rootScope.$broadcast('addTableData',params);
        },50);
    };

    return tableData;

}]);
