module App_Scripts.ContactPerson {
    "use strict";

    interface IContactPersonsViewModel {

        contactpersons: App_Scripts.Domain.IContactPerson[];
        remove(Id: number): void;
    }

    class ContactsCtrl implements IContactPersonsViewModel {

        contactpersons: App_Scripts.Domain.IContactPerson[];
        static $inject: string[] = ['apiService', 'dataService'];
        constructor(private apiService: App_Scripts.Services.ApiService,
            private dataService: App_Scripts.Services.DataService) {
            this.getContactPersons();
        }

        getContactPersons(): void {
            this.dataService.get(this.apiService.apiContactPersonURI).then((result: App_Scripts.Domain.IResponseModel) => {
              
                if (result.IsSuccess) {
                    this.contactpersons = <App_Scripts.Domain.IContactPerson[]> result.Data;
                    console.log(this.contactpersons);
                } else {
                    alert(result.Message);
                }
            });

        }

        remove(Id: number): void {
            // Attention here.. check 'this' in TypeScript and JavaScript

            this.dataService.remove(this.apiService.apiContactPersonURI + Id)
                .then((result: App_Scripts.Domain.IResponseModel) => {
                    if (result.IsSuccess) {
                        this.getContactPersons();
                    } else {
                        alert(result.Message);
                    }
                  
                });
        }

    }

    angular.module("contactApp").controller("ContactsCtrl", ContactsCtrl);
}