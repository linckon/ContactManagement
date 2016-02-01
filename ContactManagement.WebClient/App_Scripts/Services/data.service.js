var App_Scripts;
(function (App_Scripts) {
    var Services;
    (function (Services) {
        var DataService = (function () {
            function DataService($http, $q) {
                this.httpService = $http;
                this.qService = $q;
            }
            DataService.prototype.get = function (resource) {
                var self = this;
                var deferred = self.qService.defer();
                self.httpService.get(resource).then(function (result) {
                    deferred.resolve(result.data);
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            DataService.prototype.getSingle = function (resource) {
                var self = this;
                var deferred = self.qService.defer();
                self.httpService.get(resource).then(function (result) {
                    deferred.resolve(result.data);
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            DataService.prototype.save = function (resource, entity) {
                var self = this;
                var deferred = self.qService.defer();
                self.httpService.post(resource, entity)
                    .then(function (result) {
                    deferred.resolve(result.data);
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            DataService.prototype.remove = function (resource) {
                var self = this;
                var deferred = self.qService.defer();
                self.httpService.delete(resource)
                    .then(function (result) {
                    deferred.resolve(result.data);
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            DataService.$inject = ['$http', '$q'];
            return DataService;
        })();
        Services.DataService = DataService;
        angular.module('contactApp')
            .service('dataService', DataService);
    })(Services = App_Scripts.Services || (App_Scripts.Services = {}));
})(App_Scripts || (App_Scripts = {}));
//# sourceMappingURL=data.service.js.map