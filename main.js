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

.controller('EducationController', function($scope, $http, $filter) {
	$http.get('data/school-info.json').success(function(response) {
		$scope.schoolInfo = response;
	})
	$http.get('data/class-info.json').success(function(response) {
		$scope.classInfo = response;
	})
	$scope.classCategory = 'ALL'

	$(function () {
  		
	})

})

.controller('WorkController', function($scope, $http) {
	$http.get('data/work-info.json').success(function(response) {
		$scope.workInfo = response;
	})
})

.controller('ContactController', function($scope) {

})

.directive('popover', function(){
	return function(scope, elem) {
		elem.popover();
	}
});	

$(document).ready(function() {
	var scroll_pos = 0;
	$(document).scroll(function() {
		scroll_pos = $(this).scrollTop();
		if (scroll_pos > 75) {
			// $('.navbar').css('background-color', 'rgba(204, 204, 204, 0.9)');
			$('.navbar').animate({
				backgroundColor: "rgba(237, 245, 243, 0.9)"
			}, 250);
		} else {
			// $('.navbar').css('background-color', 'transparent');
			$('.navbar').animate({
				backgroundColor: 'transparent'
			}, 250);
		}
	});
});