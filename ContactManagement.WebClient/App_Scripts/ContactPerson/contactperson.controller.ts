module App_Scripts.ContactPerson  {
    "use strict";

    export interface IAddContactPersonViewModel {
        contactPerson: App_Scripts.Domain.IContactPerson;
        save(): void;
        buttonName: string;
    }

    class ContactCtrl implements IAddContactPersonViewModel {

        contactPerson: App_Scripts.Domain.IContactPerson;
        public buttonName: string;
        static $inject: string[] = ['$state', 'apiService', 'dataService'];

        constructor(private $state: angular.ui.IState,
            private apiService: App_Scripts.Services.ApiService,
            private dataService: App_Scripts.Services.DataService) {
            this.buttonName = 'Add';
        }

        save(): void {
            this.dataService.save(this.apiService.apiContactPersonURI, this.contactPerson)
                .then((result: App_Scripts.Domain.IResponseModel) => {
                console.log(result);
                alert('submitted successfully');
                this.contactPerson = null;
                      //this.$state.go('contacts');
                });
        }
    }

    angular.module("contactApp").controller("ContactCtrl", ContactCtrl);
}