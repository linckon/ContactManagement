var App_Scripts;
(function (App_Scripts) {
    var ContactPerson;
    (function (ContactPerson) {
        "use strict";
        var ContactsCtrl = (function () {
            function ContactsCtrl(apiService, dataService) {
                this.apiService = apiService;
                this.dataService = dataService;
                this.getContactPersons();
            }
            ContactsCtrl.prototype.getContactPersons = function () {
                var _this = this;
                this.dataService.get(this.apiService.apiContactPersonURI).then(function (result) {
                    if (result.IsSuccess) {
                        _this.contactpersons = result.Data;
                        console.log(_this.contactpersons);
                    }
                    else {
                        alert(result.Message);
                    }
                });
            };
            ContactsCtrl.prototype.remove = function (Id) {
                // Attention here.. check 'this' in TypeScript and JavaScript
                var _this = this;
                this.dataService.remove(this.apiService.apiContactPersonURI + Id)
                    .then(function (result) {
                    if (result.IsSuccess) {
                        _this.getContactPersons();
                    }
                    else {
                        alert(result.Message);
                    }
                });
            };
            ContactsCtrl.$inject = ['apiService', 'dataService'];
            return ContactsCtrl;
        })();
        angular.module("contactApp").controller("ContactsCtrl", ContactsCtrl);
    })(ContactPerson = App_Scripts.ContactPerson || (App_Scripts.ContactPerson = {}));
})(App_Scripts || (App_Scripts = {}));
//# sourceMappingURL=contactpersons.controller.js.map