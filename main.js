//My Angular App, using ui.router for multipage web architecture
var myApp = angular.module('myApp', ['ui.router']);

//Configuring the app for the different states of the multipage layout
myApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('','/')
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
//The controller for the home page
.controller('HomeController', function($scope) {
})
//The controller for the about page
.controller('AboutController', function($scope) {
})
//The controller for the education page, makes two get requests and uses an angular filter
.controller('EducationController', function($scope, $http, $filter) {
	$http.get('data/school-info.json').success(function(response) {
		$scope.schoolInfo = response;
	})
	$http.get('data/class-info.json').success(function(response) {
		$scope.classInfo = response;
	})
	//Initializes what is seen on the page load
	$scope.classCategory = 'ALL'
})
//The controller for the work page, makes a get request
.controller('WorkController', function($scope, $http) {
	$http.get('data/work-info.json').success(function(response) {
		$scope.workInfo = response;
	})
})
//The controller for the contact page
.controller('ContactController', function($scope) {
})
//Creating the directive for the popovers on the education page
.directive('popover', function(){
	return function(scope, elem) {
		elem.popover();
	}
});	
//Changes the background visability based on the page's position
$(document).ready(function() {
	var scroll_pos = 0;
	$(document).scroll(function() {
		scroll_pos = $(this).scrollTop();
		if (scroll_pos > 75) {
			$('.navbar').animate({
				backgroundColor: "rgba(237, 245, 243, 0.9)"
			}, 150);
		} else {
			$('.navbar').animate({
				backgroundColor: 'transparent'
			}, 150);
		}
	});
});