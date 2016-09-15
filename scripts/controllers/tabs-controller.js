'use strict';

/**
 * @ngdoc function
 * @name PrototypeApp.controller:TabsCtrl
 * @description
 * # TabsCtrl
 * Controller of the PrototypeApp
 */

window.CNC_APP.controller('TabsCtrl',['$scope','$state','dataService',function ($scope,$state,dataService) {
      	//TODO temporaray data
        $scope.menuItems = [
            {
                id: 1,
                name: "Import Data",
                subMenu:[
                	{
                		name:'IGLS Balance',
                		key:'BAL',// TODO,
                		url:'balance'
                	},
                	{	
                		name:'IGLS SOI',
                		key: 'SOI', // todo
                		url:'soi'
                	}
                ] 
            },
            {
                id: 2,
                name: "View Raw Data",
                subMenu:[
                	{
                		name:'IGLS Balance',
                		key:'BAL', // TODO
                		url:'balance'
                	},
                	{	
                		name:'IGLS SOI',
                		key: 'SOI', // todo
                		url:'soi'
                	}
                ] 
            },
            {
                id: 3,
                name: "View Consolidated Data",
                subMenu:[
                	{
                		name:'IGLS Balance',
                		key:'BAL', // TODO
                		url:'balance'
                	},
                	{	
                		name:'IGLS SOI',
                		key: 'SOI', // todo
                		url:'soi'
                	}
                ] 
            },
            {
                id: 4,
                name: "Export Data",
                subMenu:[
                	{
                		name:'IGLS Balance',
                		key:'BAL', // TODO
                		url:'balance'
                	},
                	{	
                		name:'IGLS SOI',
                		key: 'SOI', // todo
                		url:'soi'
                	}
                ] 
            }
        ];

        $scope.selectionChange = function(parentID,childID){
            //On menu selection, check the state, to stop making extra ajaxcall
            if(/*!($state.currentState === $state.previousState)*/true){
                dataService.addTable(parentID,childID);
            }
        };
}]);




