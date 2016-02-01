
module App_Scripts.Services {
    "use strict";

    export interface IApiService {
        apiContactPersonURI: string;
    }

    export class ApiService implements IApiService {
        apiContactPersonURI: string;
        static $inject = ['baseUrl'];
        constructor(baseUrl) {
            this.apiContactPersonURI = baseUrl + 'contactperson/';
        }
    }

    angular.module('contactApp')
        .service('apiService', ApiService);
}

angular.module('contactApp').value('baseUrl', 'http://localhost:8747//api/');