// Install the angularjs.TypeScript.DefinitelyTyped NuGet package 
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App_Scripts;
(function (App_Scripts) {
    var Domain;
    (function (Domain) {
        "use strict";
        var ConatctPerson = (function (_super) {
            __extends(ConatctPerson, _super);
            function ConatctPerson(Name, Phone, Email, Organization, Title, Address, Id) {
                _super.call(this);
                this.Name = Name;
                this.Phone = Phone;
                this.Email = Email;
                this.Organization = Organization;
                this.Title = Title;
                this.Address = Address;
                this.Id = Id;
                this.Id = Id;
                this.Title = Title;
                this.Phone = Phone;
                this.Email = Email;
                this.Organization = Organization;
                this.Title = Title;
                this.Address = Address;
            }
            return ConatctPerson;
        })(Domain.EntityBase);
        Domain.ConatctPerson = ConatctPerson;
    })(Domain = App_Scripts.Domain || (App_Scripts.Domain = {}));
})(App_Scripts || (App_Scripts = {}));
//# sourceMappingURL=ContactPerson.js.map