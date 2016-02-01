var App_Scripts;
(function (App_Scripts) {
    var ContactPerson;
    (function (ContactPerson) {
        var ContactDetailctCtrl = (function () {
            function ContactDetailctCtrl($stateParams, apiService, dataService) {
                var _this = this;
                this.$stateParams = $stateParams;
                this.apiService = apiService;
                this.dataService = dataService;
                this.cId = $stateParams.id;
                this.buttonName = 'Update';
                dataService.getSingle(this.apiService.apiContactPersonURI + this.cId)
                    .then(function (result) {
                    _this.contactPerson = result.Data;
                });
            }
            ContactDetailctCtrl.prototype.save = function () {
                var _this = this;
                this.dataService.save(this.apiService.apiContactPersonURI, this.contactPerson)
                    .then(function (result) {
                    console.log(result);
                    alert('updated successfully');
                    _this.contactPerson = null;
                    //  this.$state.go('contacts');
                });
            };
            ContactDetailctCtrl.$inject = ['$stateParams', 'apiService', 'dataService'];
            return ContactDetailctCtrl;
        })();
        angular.module('contactApp')
            .controller('ContactDetailctCtrl', ContactDetailctCtrl);
    })(ContactPerson = App_Scripts.ContactPerson || (App_Scripts.ContactPerson = {}));
})(App_Scripts || (App_Scripts = {}));
//# sourceMappingURL=contactpersondetail.controller.js.map