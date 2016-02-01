module App_Scripts.Services {
    export interface IDataService {
        get(resource: string): ng.IPromise<App_Scripts.Domain.EntityBase>;
        getSingle(resource: string): ng.IPromise<App_Scripts.Domain.EntityBase>;
        save(resource: string, entity: App_Scripts.Domain.IEntity): ng.IPromise<App_Scripts.Domain.EntityBase>;
        remove(resource: string): ng.IPromise<any>;
    }

    export class DataService implements IDataService {

        private httpService: ng.IHttpService;
        private qService: ng.IQService;

        static $inject = ['$http', '$q'];
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.httpService = $http;
            this.qService = $q;
        }

        get(resource: string): ng.IPromise<App_Scripts.Domain.EntityBase> {
            var self = this;

            var deferred = self.qService.defer();

            self.httpService.get(resource).then((result: any) => {
                deferred.resolve(result.data);
            }, error => {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        getSingle(resource: string): ng.IPromise<App_Scripts.Domain.EntityBase> {
            var self = this;

            var deferred = self.qService.defer();

            self.httpService.get(resource).then((result: any) => {
                deferred.resolve(result.data);
            }, error => {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        save(resource: string, entity: App_Scripts.Domain.IEntity): ng.IPromise<App_Scripts.Domain.EntityBase> {
            var self = this;
            var deferred = self.qService.defer();

            self.httpService.post(resource, entity)
                .then(result => {
                    deferred.resolve(result.data);
                }, error => {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        

        remove(resource: string): ng.IPromise<any> {
            var self = this;

            var deferred = self.qService.defer();

            self.httpService.delete(resource)
                .then(result => {
                    deferred.resolve(result.data);
                }, error => {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }

    angular.module('contactApp')
        .service('dataService', DataService);
}