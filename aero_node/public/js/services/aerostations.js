angular.module('aeroStationService', [])

	// super simple service
	// each function returns a promise object 
	.factory('AeroStations', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/aerostations');
			},
			create : function(aeroStationData) {
				return $http.post('/api/aerostations', aeroStationData);
			},
			delete : function(id) {
				return $http.delete('/api/aerostations' + id);
			}
		}
	}]);