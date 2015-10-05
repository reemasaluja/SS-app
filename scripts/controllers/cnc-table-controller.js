'use strict';

angular.module('stateStreetPrototypeApp')
	.controller('TableCtrl',['$scope', function($scope) {
	    $scope.grid = true;

  		$scope.gridOptions = {
  			enableSorting: true,
  			enableColumnResizing:true,
  			enableFiltering: true,
		    columnDefs: [
		      { field: 'doc-date' , name:'Document Date',width: '150' },
		      { field: 'post-date', name: 'Posting Date',width: '150' },
		      { field: 'year', name: 'Fiscal Year',width: '150' },
		      { field: 'duration', name: 'Period',width: '150' },
		      { field: 'number', name: 'Reference Document Number',width: '150' },
		      { field: 'credit-account', name: 'Credit General Ledger Account',width: '150' },
		      { field: 'credit-cost', name: 'Credit Cost Centre Account',width: '150' },
		      { field: 'credit-value', name: 'Credit Value',width: '150' },
		      { field: 'credit-des', name: 'Credit Description',width: '150' },
		      { field: 'debit-account', name: 'Debit General Ledger Account',width: '150' },
		      { field: 'debit-cost', name: 'Debit Cost Centre Account',width: '150' },
		      { field: 'debit-value', name: 'Debit Vaue',width: '150' },
		      { field: 'debit-des', name: 'Debit Description',width: '150' },
		      { field: 'net-value', name: 'Net Value £',width: '150' },
		      { field: 'company-code', name: 'Company Code',width: '150' }
		    ]
		};

	    var value = {};

		value.BAL = [
				    {
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2014",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :67,
						"company-code" : "FROB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2015",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FROB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2010",
						"duration" : "3",
						"number" : 4,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 1,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "TDRE"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 8,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 3,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "TDRE"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "TDRE"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 5,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 2,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2014",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2015",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2010",
						"duration" : "3",
						"number" : 4,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 1,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 8,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 3,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 5,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 2,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					}
		];

		value.SOI = [
				    {
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : "6",
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : "6",
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : "6",
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : "6",
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : "6",
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : "6",
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : "6",
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : "6",
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : "6",
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2014",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2015",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2010",
						"duration" : "3",
						"number" : 4,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 1,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 8,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 3,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 6,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 5,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					},
					{
					    "doc-date" : "2011-23-4",
						"post-date" : "2011-23-4",
						"year" : "2013",
						"duration" : "3",
						"number" : 2,
						"credit-account" : "5464646466",
						"credit-cost" : "535353535",
						"credit-value" : "533535",
						"credit-des" : "Sample",
						"debit-account" : "Morgan",
						"debit-cost" : "State",
						"debit-value" : "45k",
						"debit-des" : "Sample data for table",
						"net-value" :"67",
						"company-code" : "FRDB"
					}
		];

		//$scope.gridOptions.data = value.BAL1;
		$scope.$on('addTableData',function(event,attr){ 
			$scope.gridOptions.data = value[attr.viewId];
		});		 
		
	}]
);
