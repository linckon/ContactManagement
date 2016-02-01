var App_Scripts;
(function (App_Scripts) {
    var ContactPerson;
    (function (ContactPerson) {
        "use strict";
        var ContactCtrl = (function () {
            function ContactCtrl($state, apiService, dataService) {
                this.$state = $state;
                this.apiService = apiService;
                this.dataService = dataService;
                this.buttonName = 'Add';
            }
            ContactCtrl.prototype.save = function () {
                var _this = this;
                this.dataService.save(this.apiService.apiContactPersonURI, this.contactPerson)
                    .then(function (result) {
                    console.log(result);
                    alert('submitted successfully');
                    _this.contactPerson = null;
                    //this.$state.go('contacts');
                });
            };
            ContactCtrl.$inject = ['$state', 'apiService', 'dataService'];
            return ContactCtrl;
        })();
        angular.module("contactApp").controller("ContactCtrl", ContactCtrl);
    })(ContactPerson = App_Scripts.ContactPerson || (App_Scripts.ContactPerson = {}));
})(App_Scripts || (App_Scripts = {}));
//# sourceMappingURL=contactperson.controller.js.map