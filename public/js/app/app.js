
    var app = angular.module('app',['ngRoute']);
    var dir = '';
     
    app.config(function($routeProvider, $locationProvider)
    {
     
       $routeProvider
     
       .when( dir + '/', {
          templateUrl : 'page/home.html',
          controller     : 'HomeController',
       })
     
       .when(dir + '/grid', {
          templateUrl : 'page/grid.html',
          controller  : 'GridController',
       })
     
       .when(dir + '/typography', {
          templateUrl : 'page/typography.html',
          controller  : 'TypographyController',
       })

       .when(dir + '/tables', {
          templateUrl : 'page/tables.html',
          controller  : 'TablesController',
       })

       .when(dir + '/form', {
          templateUrl : 'page/form.html',
          controller  : 'FormController',
       })

       .when(dir + '/buttons', {
          templateUrl : 'page/buttons.html',
          controller  : 'ButtonsController',
       })

       .when(dir + '/images', {
          templateUrl : 'page/images.html',
          controller  : 'ImagesController',
       })

       .when(dir + '/menu-bar', {
           title: 'Menu Bar ',
          templateUrl : 'page/menu-bar.html',
          controller  : 'MenuBarController',
       })

       .when(dir + '/menu-sidebar', {
          templateUrl : 'page/menu-sidebar.html',
          controller  : 'MenuSidebarController',
       })

    });
