'use strict';

function NavbarController($location){
	this.activePage = $location.path();
	this.setPage = (event)=> {
		this.activePage = event.target.pathname;
	}
}

NavbarController.$inject = ['$location'];

angular.module('ngSpaApp')
  .controller('NavbarController', NavbarController);
