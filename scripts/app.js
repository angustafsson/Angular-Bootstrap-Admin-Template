angular.module('TemplateApp', ['ngRoute', 'ui.bootstrap'])
.config(function($routeProvider){
	$routeProvider.when('/', {
	 	templateUrl: 'app/home/index.html',
	 	controller: 'homectrl'
	});

	$routeProvider.otherwise('/');
});