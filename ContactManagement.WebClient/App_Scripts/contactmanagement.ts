module App_Scripts {
    "use strict";

    class Config {
        constructor($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {

            $stateProvider
                .state('contacts', {
                    url: '/contacts',
                    templateUrl: '/App_Scripts/ContactPerson/contacts.tpl.html',
                    controller: 'ContactsCtrl as vm'
                })
                .state('createcontact',
                {
                    url: '/createcontact',
                    templateUrl: '/App_Scripts/ContactPerson/createcontact.tpl.html',
                    controller: 'ContactCtrl as vm'
                })
                .state('contactdetail',
                {
                    url: '/contactdetail/:id',
                    templateUrl: '/App_Scripts/ContactPerson/createcontact.tpl.html',
                    controller: 'ContactDetailctCtrl as vm'
                });
            $urlRouterProvider.otherwise('/contacts');
            // use the HTML5 History API
            // $locationProvider.html5Mode(true);
        }
    }

    Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    var mainApp = angular.module('contactApp', ['ui.router']);
    mainApp.config(Config);

}

