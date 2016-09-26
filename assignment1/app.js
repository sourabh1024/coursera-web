(function(){
	'use strict';
	angular.module('ItemsApp',[])

	.controller('LunchController',LunchController);
	
	function LunchController($scope){
		$scope.count =0;

		$scope.generateMessage = function() {
			var itemsCount = calculate();
			$scope.message="Please enter data first";
			if (itemsCount==0) {
				$scope.message="Please enter data first";
			} else if(itemsCount<=3) {
				$scope.message="Enjoy!";
			} else {
				$scope.message="Too much!"
			}
		};
		function calculate(){
			if ($scope.lunchitems === undefined){
				return 0;
			}
			var items = $scope.lunchitems.split(",");
			return items.length;
		}
	};
	
	LunchController.$inject=['$scope'];

	

})();