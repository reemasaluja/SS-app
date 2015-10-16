'use strict';

angular.module('cncApp')
    .controller('ResultDataController',['$scope','CNCService','$rootScope','CNCConstants','$state','DateUtil',
        function($scope,CNCService,$rootScope,CNCConstants,$state,DateUtil){

            $scope.gridData = [];
            $scope.isDataAvailable = false;
            $rootScope.showloader = true;

            $scope.columns =[];

            $scope.model ={
                system:null,
                fileType: null,
                fundCode: null,
                startDate : null,
                endDate:null
            }

            $scope.showResult = function(){
                serviceCall();
            }

            function serviceCall (){
                var data = {
                    "system":$scope.model.system,
                    "fileType":$scope.model.fileType,
                    "fundCode":$scope.model.fundCode,
                    'startDate': DateUtil.convertDateFormat($scope.model.startDate),
                    'endDate': DateUtil.convertDateFormat($scope.model.endDate)
                };

                CNCService.dataService($state.currentState,data).then(function(response){
                    $scope.gridData = response;
                    $rootScope.showloader = false;
                    $scope.isDataAvailable = true;

                    //Set columns header according to the file type and state
                    //Need to revisit for dynamic loading
                    //For now, currently hard coded
                    //Based on File type
                     defineColumns();

                    //Set Grid on View
                    showGrid();

                },function(error){
                 defineColumns();

                                    //Set Grid on View
                                    showGrid();
                    $scope.message = error;
                    $scope.isDataAvailable = false;
                    $rootScope.showloader = false;
                });

            }

            var showGrid = function(){

                $scope.gridOptions = {
                    data: $scope.gridData,
                    columnDefs : $scope.columns,
                    enableSorting: true,
                    enableColumnResizing:true,
                    enableFiltering: true
                };
            }

            // File Type.
            // TODO file type names
            var defineColumns = function(){
                switch ($scope.model.fileType){
                    case 'balances':
                        $scope.columns=[
                            {   field: 'userId',  displayName: 'User Id' ,width:'5%'},
                            {   field: 'creationDate',  displayName: 'Creation Date',  cellFilter: 'date:\'yyyy-MM-dd\'' ,width:'5%'},
                            {   field: 'fundCode',  displayName: 'Fund Code',width:'5%'},
                            {   field: 'glAcctNo',  displayName: 'GL Acc No',width:'5%',cellClass:'text_align_right'},
                            {   field: 'glDescription',  displayName: 'GL Description',width:'10%'},
                            {   field: 'ccyLocal',  displayName: 'CCY Local',width:'5%'},
                            {   field: 'ccyBase',  displayName: 'CCY Base',width:'5%'},
                            {   field: 'drFigure',  displayName: 'DR Figure',width:'10%',cellFilter: 'currency',cellClass:'text_align_right'},
                            {   field: 'crFigure',  displayName: 'CR Figure',width:'10%',cellFilter:'currency',cellClass:'text_align_right'},
                            {   field: 'acid',  displayName: 'ACID',width:'10%',cellClass:'text_align_right'},
                            {   field: 'acidDescription',  displayName: 'ACID Description',width:'20%'},
                            {   field: 'rptDate',  displayName: 'Rpt Date',  cellFilter: 'date:\'yyyy-MM-dd\'',width:'5%' },
                            {   field: 'systemDate',  displayName: 'System Date',  cellFilter: 'date:\'yyyy-MM-dd\'',width:'5%' }
                        ];
                    break;

                    case 'soi':
                        $scope.columns=[
                            {   field: 'uniqueKey',  displayName: 'Unique Key' ,width:'10%'},
                            {   field: 'mbsQuantity',  displayName: 'MBS Quantity' ,width:'10%'},
                            {   field: 'quantity',  displayName: 'Quantity',width:'10%'},
                            {   field: 'unadjustedCost',  displayName: 'Unadjusted Cost',width:'15%',cellClass:'text_align_right'},
                            {   field: 'marketVal',  displayName: 'Market Value',width:'20%'},
                            {   field: 'notional',  displayName: 'Base Notional',width:'5%'},
                            {   field: 'unrealFxGl',  displayName: 'Unreal FX GL',width:'5%'},
                            {   field: 'marketGl',  displayName: 'Market GL',width:'10%',cellFilter: 'currency',cellClass:'text_align_right'},
                            {   field: 'localCost',  displayName: 'Local Cost',width:'10%',cellFilter:'currency',cellClass:'text_align_right'},
                            {   field: 'baseCost',  displayName: 'Base Cost',width:'10%',cellClass:'text_align_right'},
                            {   field: 'fund',  displayName: 'Fund',width:'10%'},
                            {   field: 'securityDesc',  displayName: 'Security Description',width:'10%' }
                        ];
                    break;

                    case 'transactions':
                        $scope.columns=[
                            {   field: 'glAcctNo',  displayName: 'GL Acc No',width:'15%',cellClass:'text_align_right'},
                            {   field: 'glDescription',  displayName: 'GL Description',width:'20%'},
                            {   field: 'ccyLocal',  displayName: 'CCY Local',width:'5%'},
                            {   field: 'ccyBase',  displayName: 'CCY Base',width:'10%'},
                            {   field: 'drFigure',  displayName: 'DR Figure',width:'10%',cellFilter: 'currency',cellClass:'text_align_right'},
                            {   field: 'crFigure',  displayName: 'CR Figure',width:'10%',cellFilter:'currency',cellClass:'text_align_right'},
                            {   field: 'acid',  displayName: 'ACID',width:'5%',cellClass:'text_align_right'},
                            {   field: 'acidDescription',  displayName: 'ACID Description',width:'10%'},
                            {   field: 'rptDate',  displayName: 'Rpt Date',  cellFilter: 'date:\'yyyy-MM-dd\'',width:'5%' },
                            {   field: 'systemDate',  displayName: 'System Date',  cellFilter: 'date:\'yyyy-MM-dd\'',width:'5%' }
                        ];
                    break;

                    case 'clientAttribute':
                        $scope.columns=[
                            {   field: 'userId',  displayName: 'User Id' ,width:'10%'},
                            {   field: 'creationDate',  displayName: 'Creation Date',  cellFilter: 'date:\'yyyy-MM-dd\'' ,width:'10%'},
                            {   field: 'fundCode',  displayName: 'Fund Code',width:'10%'},
                            {   field: 'glAcctNo',  displayName: 'GL Acc No',width:'15%',cellClass:'text_align_right'},
                            {   field: 'glDescription',  displayName: 'GL Description',width:'20%'},
                            {   field: 'ccyLocal',  displayName: 'CCY Local',width:'5%'},
                            {   field: 'ccyBase',  displayName: 'CCY Base',width:'10%'},
                            {   field: 'drFigure',  displayName: 'DR Figure',width:'10%',cellFilter: 'currency',cellClass:'text_align_right'},
                            {   field: 'crFigure',  displayName: 'CR Figure',width:'10%',cellFilter:'currency',cellClass:'text_align_right'},
                            {   field: 'acid',  displayName: 'ACID',width:'5%',cellClass:'text_align_right'},
                            {   field: 'acidDescription',  displayName: 'ACID Description',width:'10%'},
                            {   field: 'rptDate',  displayName: 'Rpt Date',  cellFilter: 'date:\'yyyy-MM-dd\'',width:'5%' },
                            {   field: 'systemDate',  displayName: 'System Date',  cellFilter: 'date:\'yyyy-MM-dd\'',width:'5%' }
                        ];
                    break;

                    case 'allocations':
                        $scope.columns=[
                            {   field: 'userId',  displayName: 'User Id' ,width:'10%'},
                            {   field: 'creationDate',  displayName: 'Creation Date',  cellFilter: 'date:\'yyyy-MM-dd\'' ,width:'10%'},
                            {   field: 'fundCode',  displayName: 'Fund Code',width:'10%'},
                            {   field: 'glAcctNo',  displayName: 'GL Acc No',width:'15%',cellClass:'text_align_right'},
                            {   field: 'glDescription',  displayName: 'GL Description',width:'20%'},
                            {   field: 'ccyLocal',  displayName: 'CCY Local',width:'5%'}
                        ];
                    break;
                }


            }
    }]);
