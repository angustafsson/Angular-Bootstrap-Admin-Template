angular.module('TemplateApp', ['ngRoute', 'ui.calendar', 'ui.bootstrap'])
.config(function($routeProvider){
	$routeProvider.when('/', {
	 	templateUrl: 'app/home/index.html',
	 	controller: 'homectrl'
	}).when('/calendar', {
		templateUrl: 'app/calendar/index.html',
		controller:  'calendarctrl'
	});

	$routeProvider.otherwise('/');
}).controller('MenuCtrl', ['$scope', '$location', function($scope, $location){
		$scope.isActive = function(url){
			return url == $location.path();
		}
}]);