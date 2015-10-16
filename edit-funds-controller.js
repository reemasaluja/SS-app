'use strict';

angular.module('cncApp')
	.controller('EditFundsModalCtrl',['$scope','$modalInstance','rowSelected','CNCService' , 'DateUtil',function($scope, $modalInstance, $rowSelected ,CNCService,DateUtil) {

        $scope.showAddSubsidiaryForm = false;

        $scope.parentFundCode = $rowSelected[0].parentNode;

        $scope.model = {
             checked: false,
             fundCode:null,
             fundType:null,
             proportionalType:null,
             allocationPercentage:null,
             startDate:null,
             endDate:null
        };

       $scope.add = function () {

       		     /*var data = {
                    "parentFundCode":$scope.parentFundCode,
                    "id":null,
                    "fundCode":'TEST56',
                    "fundType":'FEEDER',
                    "proportionalType":'WOC',
                    "allocationPercentage":'30',
                    "startDate":'2015-03-07',
                    "endDate":'2015-06-07',
                    "isConsolidated":"N",
                    "status":"ACTIVE"
                };*/

                var data = {
                    "parentFundCode":$scope.parentFundCode,
                    "id":null,
                    "fundCode":$scope.model.fundCode,
                    "fundType":$scope.model.fundType,
                    "proportionalType":$scope.model.proportionalType,
                    "allocationPercentage":$scope.model.allocationPercentage,
                    "startDate":DateUtil.convertDateFormat($scope.model.startDate),
                    "endDate":DateUtil.convertDateFormat($scope.model.endDate),
                    "isConsolidated":"N",
                    "status":"ACTIVE"
                };

       		    CNCService.addChildFundService(data).then(function(response){
       		    console.log(response);
       		            $modalInstance.close(response);
       		        },function(response){
       		            console.log(response);
       		        });
       		};



		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};

		$scope.$watch('model.checked', function(){
		    // if Add subsidiary is selected , show form

		    if($scope.model.checked){
		        $scope.showAddSubsidiaryForm = true;
		    }

		    else{
		        //animation
		        $scope.showAddSubsidiaryForm = false;
		    }

        });

		$scope.$on('$destroy', function() {
			console.log('Modal scope should be destroyed.');
		});
	}]
);

