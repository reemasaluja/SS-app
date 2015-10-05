'use strict';

angular.module('stateStreetPrototypeApp').controller('FundTableCtrl', function ($scope,$modal) {
	// Temporary Data
	var fundData =[
		{
			"id": 1,
			"parentId":1,
			"name": "Och-Ziff Capital Structure Arbitrage Overseas Fund, Ltd.",
			"fundCode" : 'CAPO',
			"fundType": "FEEDER",
            "proportionalType": "POC",
            "allocationPercentage": 50,
            "startDate": "2015-10-02",
            "endDate": "2015-10-02",
            "isConsolidated": null,
            "status": "ACTIVE",
			"fundCodes": [
				{
					"id": 2,
					"parentId": 1,
					"fundCode":"CAPD",
					"name": "Och-Ziff Capital Structure Arbitrage Domestic Fund, L.P.",
					"fundType": "FEEDER",
		            "proportionalType": "POC",
		            "allocationPercentage": 50,
		            "startDate": "2015-10-02",
		            "endDate": "2015-10-02",
		            "isConsolidated": null,
		            "status": "ACTIVE",
					'fundCodes':[]
				},
				{
					"id": 3,
					"parentId": 1,
					"fundCode":"IMPO",
					"name": "Och-Ziff Capital Structure Arbitrage Overseas Intermediate Fund, L.P.",
					"fundType": "FEEDER",
		            "proportionalType": "POC",
		            "allocationPercentage": 50,
		            "startDate": "2015-10-02",
		            "endDate": "2015-10-02",
		            "isConsolidated": null,
		            "status": "ACTIVE",
					'fundCodes':[]
				}
			]
		},
		{
			"id": 4,
			"parentId": 4,
			"name":'CVA Investors, L.P.',
			"fundCode":'CVAI',
			"fundType": "FEEDER",
            "proportionalType": "POC",
            "allocationPercentage": 50,
            "startDate": "2015-10-02",
            "endDate": "2015-10-02",
            "isConsolidated": null,
            "status": "ACTIVE",
			'fundCodes':[]
		},
		{
			"id":5 ,
			"parentId": 5,
			"name":'OZ ELS Master Fund, Ltd.',
			"fundCode":'GELS',
			"fundType": "FEEDER",
            "proportionalType": "POC",
            "allocationPercentage": 50,
            "startDate": "2015-10-02",
            "endDate": "2015-10-02",
            "isConsolidated": null,
            "status": "ACTIVE",
			'fundCodes':[
				{
					"id": 6,
					"parentId": 5,
					"fundCode":"IMLS",
					"name": "OZ ELS Overseas Intermediate Fund, L.P.",
					"fundType": "FEEDER",
		            "proportionalType": "POC",
		            "allocationPercentage": 50,
		            "startDate": "2015-10-02",
		            "endDate": "2015-10-02",
		            "isConsolidated": null,
		            "status": "ACTIVE",
					'fundCodes':[]
				},
				{
					"id": 7,
					"parentId": 5,
					"fundCode":"LSDP",
					"name": "OZ ELS Domestic Partners, L.P.",
					"fundType": "FEEDER",
		            "proportionalType": "POC",
		            "allocationPercentage": 50,
		            "startDate": "2015-10-02",
		            "endDate": "2015-10-02",
		            "isConsolidated": null,
		            "status": "ACTIVE",
					'fundCodes':[]
				},
				{
					"id": 8,
					"parentId": 5,
					"fundCode":"LSOF",
					"name": "OZ ELS Overseas Fund, Ltd.",
					"fundType": "FEEDER",
		            "proportionalType": "POC",
		            "allocationPercentage": 50,
		            "startDate": "2015-10-02",
		            "endDate": "2015-10-02",
		            "isConsolidated": null,
		            "status": "ACTIVE",
					'fundCodes':[]
				}
			]
		},
		{
			"id": 9,
			"parentId": 9,
			"name":'OZ GC Opportunities Master Fund, Ltd.',
			"fundCode":'GGCF',
			"fundType": "FEEDER",
            "proportionalType": "POC",
            "allocationPercentage": 50,
            "startDate": "2015-10-02",
            "endDate": "2015-10-02",
            "isConsolidated": null,
            "status": "ACTIVE",
			'fundCodes':[
				{
					"id": 10,
					"parentId": 9,
					"fundCode":"GGCFD",
					"name": "OZ GC Opportunities Domestic Partners, L.P.",
					"fundType": "FEEDER",
		            "proportionalType": "POC",
		            "allocationPercentage": 50,
		            "startDate": "2015-10-02",
		            "endDate": "2015-10-02",
		            "isConsolidated": null,
		            "status": "ACTIVE",
					'fundCodes':[]
				},
				{
					"id": 11,
					"parentId": 9,
					"fundCode":"GGCFI",
					"name": "OZ GC Opportunities Overseas Intermediate Fund, L.P.",
					"fundType": "FEEDER",
		            "proportionalType": "POC",
		            "allocationPercentage": 50,
		            "startDate": "2015-10-02",
		            "endDate": "2015-10-02",
		            "isConsolidated": null,
		            "status": "ACTIVE",
					'fundCodes':[]
				}
			]
		},
		{
			"id": 12,
			"parentId": 12,
			"name":'OZ Asia Master Fund, Ltd.',
			"fundCode":'OZAS',
			"fundType": "FEEDER",
            "proportionalType": "POC",
            "allocationPercentage": 50,
            "startDate": "2015-10-02",
            "endDate": "2015-10-02",
            "isConsolidated": null,
            "status": "ACTIVE",
			'fundCodes':[]
		},
		{
			"id": 13,
			"parentId": 13,
			"name":'OZ Credit Opportunities Master Fund, Ltd.',
			"fundCode":'OZCO',
			"proportionalType": "POC",
            "allocationPercentage": 50,
            "startDate": "2015-10-02",
            "endDate": "2015-10-02",
            "isConsolidated": null,
            "status": "ACTIVE",
			'fundCodes':[]
		},
		{
			"id": 14,
			"parentId":14 ,
			"name":'Och-Ziff Capital Structure Arbitrage Master Fund, Ltd.',
			"fundCode":'OZCP',
			"proportionalType": "POC",
            "allocationPercentage": 50,
            "startDate": "2015-10-02",
            "endDate": "2015-10-02",
            "isConsolidated": null,
            "status": "ACTIVE",
			'fundCodes':[]
		}
	];

	//Function to handle hierarchy representation of table
	// Responsible for Binding between Child and Parent
	var treeView = function( childArray, currentLevel, dataArray){

		childArray.forEach( function( childNode ){

		if (childNode.fundCodes.length > 0){
		  childNode.$$treeLevel = currentLevel;
		}

		dataArray.push( childNode );

		//Temporary fix for root element with no child

		if(!childNode.fundCodes.length && childNode.parentId === childNode.id){
			childNode.$$treeLevel = currentLevel;
		}

		treeView( childNode.fundCodes, currentLevel + 1, dataArray );

		});
	};

	$scope.gridOptions = {
		enableSorting: true,
		enableFiltering: true,
		showTreeExpandNoChildren: false,
		columnDefs: [
		  { field:'name',name: 'Fund Name', width: '20%' },
		  { field:'fundCode',name: 'Fund Code', width: '10%' },
		  { field:'proportionalType',name: 'Proportional Type', width: '10%' },
		  { field:'allocationPercentage',name: 'Allocation', width: '10%' },
		  { field:'startDate',name: 'Start Date', width: '10%' },
		  { field:'endDate',name: 'End Date', width: '10%' },
		  { field:'status',name: 'Status', width: '10%' },
		  { field:'isConsolidated',name: 'Consolidated'}
		],
		onRegisterApi: function( gridApi ) { 
      		$scope.gridApi = gridApi;
      	}
	};

	$scope.gridOptions.data = [];

	// Open Modal 
	$scope.open = function () {

		var modalInstance = $modal.open({
		  templateUrl: '../views/add-funds-modal.html',
		  controller: 'AddFundsModalCtrl'
		});

		modalInstance.result.then(function (updataData) {
			// On modal close with Add funds selection, update the Grid
			// Data is not saved here only Grid is rerendered 
			$scope.gridOptions.data.push(updataData);
			treeView( $scope.gridOptions.data, 0, []);
		}, function () {
			//Todo on cancel
			console.log('cancelled');
		});
	};

	// Save the added/updated funds
	// call the service and send new data
	$scope.save = function(){

	};
	
	treeView( fundData, 0, $scope.gridOptions.data );

});



