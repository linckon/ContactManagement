module App_Scripts.ContactPerson {

    interface IEditContactPersonViewModel {
        contactPerson: App_Scripts.Domain.IContactPerson;
        save(): void;
        buttonName:string;
    }

    interface IContactPersonParams extends angular.ui.IStateParamsService {
        id: number;
    }

    class ContactDetailctCtrl implements IEditContactPersonViewModel {

        contactPerson: App_Scripts.Domain.IContactPerson;
        private cId: number;
        public buttonName: string;
        static $inject: string[] = ['$stateParams', 'apiService', 'dataService'];
        constructor(private $stateParams: IContactPersonParams,
            private apiService: App_Scripts.Services.ApiService,
            private dataService: App_Scripts.Services.DataService) {
            this.cId = $stateParams.id;
            this.buttonName = 'Update';
            dataService.getSingle(this.apiService.apiContactPersonURI + this.cId)
                .then((result: App_Scripts.Domain.IResponseModel) => {
                    this.contactPerson = <App_Scripts.Domain.IContactPerson> result.Data;
                });
        }

        save(): void {
            this.dataService.save(this.apiService.apiContactPersonURI, this.contactPerson)
                .then((result: App_Scripts.Domain.IResponseModel) => {
                    console.log(result);
                    alert('updated successfully');
                    this.contactPerson = null;
                    //  this.$state.go('contacts');
                });
        }
    }
    angular.module('contactApp')
        .controller('ContactDetailctCtrl', ContactDetailctCtrl);
}