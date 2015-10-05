'use strict';

angular.module('stateStreetPrototypeApp')
	.controller('AddFundsModalCtrl',['$scope','$modalInstance',function($scope, $modalInstance) {

		$scope.add = function () {
			$scope.data={
				"id": 15,
				"parentId":15 ,
				"name":this.name,
				"fundCode":this.code,
				"proportionalType": this.pType,
	            "allocationPercentage": this.allocation,
	            "startDate": this.startDate,
	            "endDate": this.endDate,
	            "isConsolidated": null, //need to discuss nirav
	            "status": 'ACTIVE',
				'fundCodes':[]
			};
			$modalInstance.close($scope.data);
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};

		$scope.$on('$destroy', function() {
			console.log('Modal scope should be destroyed.');
		});
		
	}]
);

