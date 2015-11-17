var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'HomeController',
	})
	.state('about', {
		url: '/about',
		templateUrl: 'templates/about.html',
		controller: 'AboutController',
	})
	.state('education', {
		url: '/education',
		templateUrl: 'templates/education.html',
		controller: 'EducationController',
	})
	.state('work', {
		url: '/work',
		templateUrl: 'templates/work.html',
		controller: 'WorkController',
	})
	.state('contact', {
		url: '/contact',
		templateUrl: 'templates/contact.html',
		controller: 'ContactController',
	})
})

.controller('HomeController', function($scope) {

})

.controller('AboutController', function($scope) {

})

.controller('EducationController', function($scope, $http) {
	$http.get('data/school-info.json').success(function(response) {
		$scope.schoolInfo = response;
	})
	$http.get('data/class-info.json').success(function(response) {
		$scope.classInfo = response;
	})
})

.controller('WorkController', function($scope) {

})

.controller('ContactController', function($scope) {

});	

