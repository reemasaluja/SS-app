'use strict';

/*
* Loads funds Hierarchy Table
* Creates Modal for funds update
* 0: State represents add funds button click
* 1: State represents Edit funds button click
*/
angular.module('cncApp')
    .controller('FundMasterController',['$scope','CNCService','$rootScope','CNCConstants','$modal','uiGridConstants',
        function($scope,CNCService,$rootScope,CNCConstants,$modal,uiGridConstants){
            $scope.isDataAvailable = false;
            $scope.gridData = [];
            $rootScope.showloader = true;
            $scope.showEditButton = false;
            $scope.temp = null;

           // var showGrid = function(){
               $scope.gridOptions = {
                    enableSorting: true,
                    enableFiltering: true,
                    showTreeExpandNoChildren: false,
                    enableRowSelection : true,
                    enableRowHeaderSelection : false,
                    multiSelect: false,
                    enableSelectAll : false,
                    columnDefs: [
                        {   field: 'fundCode',  displayName: 'Fund Code',width:'10%'},
                        {   field: 'fundType',  displayName: 'Fund Type',width:'10%'},
                        {   field: 'proportionalType',displayName: 'Proportional Type',width:'15%'},
                        {   field: 'allocationPercentage',  displayName: 'Allocation Percentage',width:'10%'},
                        {   field: 'startDate',  displayName: 'Start Date', cellFilter: 'date:\'yyyy-MM-dd\'', width:'20%'},
                        {   field: 'endDate',  displayName: 'End Date',cellFilter: 'date:\'yyyy-MM-dd\'',width:'20%'},
                        {   field: 'status',  displayName: 'Status',width:'10%'}
                    ],
                    onRegisterApi: function( gridApi ) {
                        $scope.gridApi = gridApi;
                        $scope.gridApi.selection.on.rowSelectionChanged($scope,function(row){
                            //find the id for selected row

                            $scope.gridApi.selection.getSelectedRows().length > 0 ? $scope.showEditButton = true:$scope.showEditButton = false;
                        });
                    }



                };
           // };

              $scope.gridOptions.data = [];

            //Function to handle hierarchy representation of table
            // Responsible for Binding between Child and Parent
            var renderView = function( parents, currentLevel, dataArray){
                  parents.forEach( function( node,index ){

                  //Master element tree level
                    if(node.fundType === "MASTER"){

                       //Get Master parent Fund Code,
                       //Need to add Child
                       node.parentNode = node.parentFundCode;

                       // Store in Temporary variable
                       // For Non Master funds
                       $scope.temp = node.parentNode;
                       node.$$treeLevel = 0;
                    }

                    //appending child elements with master code
                    else{
                        //Setting attribute in grid to bind child with its master parent.
                        node.parentNode = $scope.temp;

                       if (node.hasOwnProperty('fundCodes') ){
                           node.$$treeLevel = currentLevel;
                       }
                    }

                    dataArray.push( node );

                    //Recursive call for tree view

                    if(node.fundCodes.length>0){
                        renderView( node.fundCodes, currentLevel + 1, dataArray );
                    }
                  });

            };

            // Open Modal
            $scope.open = function (state) {

                var templateUrl = state ? 'cnc/views/add-funds-modal.html':'cnc/views/edit-funds-modal.html';
                var controller = state ? 'AddFundsModalCtrl':'EditFundsModalCtrl';
                var rowSelected = state ? null: $scope.gridApi.selection.getSelectedRows();

                var modalInstance = $modal.open({
                  templateUrl: templateUrl,
                  controller: controller,
                  resolve: {
                    rowSelected: function () {
                     return rowSelected;
                    }
                  }
                });

                modalInstance.result.then(function (updateData) {
                  // On modal close with Add funds selection, update the Grid
                    console.log(1,$scope.gridData);
                  // Add the added master fund in the list
                  $scope.gridData.push(updateData);
        console.log(2,$scope.gridData);
                  // EMPTY THE ARRAY
                  $scope.gridOptions.data =[];

                  //Re render the grid
                  renderView( $scope.gridData, 0,$scope.gridOptions.data)

                }, function () {
                    console.log('Modal cancelled');
                });
            };



           // Find Master API call

            CNCService.viewFundsService()
                .then(function(data){
                   $scope.gridData  = data;
                   console.log(data);
                    renderView( $scope.gridData, 0,$scope.gridOptions.data);
                    $rootScope.showloader = false;
                    $scope.isDataAvailable = true;

                },function(error){
                     $scope.message = "Error";
                     $scope.title = '';
                     $scope.isDataAvailable = false;
                     $rootScope.showloader = false;
                 }
            );

    }]);

