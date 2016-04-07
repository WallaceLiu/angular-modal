/**
 * 
 */
angular.module('myApp', [ 'ui.bootstrap' ])
// demo controller
.controller('modalDemo', function($scope, $modal, $log) {
	// list
	$scope.items = [ 'angularjs', 'backbone', 'canjs', 'Ember', 'react' ];
	// open click
	$scope.open = function(size) {
		var modalInstance = $modal.open({
			templateUrl : 'myModelContent.html',
			controller : 'ModalInstanceCtrl', // specify controller for modal
			size : size,
			resolve : {
				items : function() {
					return $scope.items;
				}
			}
		});
		// modal return result
		modalInstance.result.then(function(selectedItem) {
			$scope.selected = selectedItem;
		}, function() {
			$log.info('Modal dismissed at: ' + new Date())
		});
	}
})
// modal controller
.controller('ModalInstanceCtrl', function($scope, $modalInstance, items) {
	
	$scope.items = items;
	
	$scope.selected = {
		item : $scope.items[0]
	};
	// ok click
	$scope.ok = function() {
		$modalInstance.close($scope.selected.item);
	};
	// cancel click
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	}
});