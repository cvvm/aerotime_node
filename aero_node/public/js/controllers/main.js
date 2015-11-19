angular.module('aeroStationController', [])
	.controller('mainController', ['$scope','$http','Todos', function($scope, $http, AeroStations) {
		$scope.formData = {};
		// GET
		AeroStations.get().success(function(data){
			
		});
		
		// create new aero station
		$scope.createAeroStation = function(){
			if ($scope.formData.text != undefined) {
				AeroStations.create($scope.formData).success(function() {
					$scope.formData = {};
				});
			}
		};
		
		// delete aero station
		$scope.deleteAeroStation = function(id) {
			AeroStations.delete(id).success(function() {
				
			});
		};
	}]);