var App_Scripts;
(function (App_Scripts) {
    var Services;
    (function (Services) {
        "use strict";
        var ApiService = (function () {
            function ApiService(baseUrl) {
                this.apiContactPersonURI = baseUrl + 'contactperson';
            }
            ApiService.$inject = ['baseUrl'];
            return ApiService;
        })();
        Services.ApiService = ApiService;
        angular.module('contactApp')
            .service('ApiService', ApiService);
    })(Services = App_Scripts.Services || (App_Scripts.Services = {}));
})(App_Scripts || (App_Scripts = {}));
angular.module('contactApp').value('baseUrl', 'http://localhost:8747//api/');
