// Install the angularjs.TypeScript.DefinitelyTyped NuGet package 

module App_Scripts.Domain {
    "use strict";

    export interface IContactPerson {
        Id?: number;
        Name: string;
        Phone: string;
        Email: string;
        Organization: string;
        Title: string;
        Address: string;
    }

    export class ConatctPerson extends EntityBase implements IContactPerson {
        constructor(public Name: string,
                    public Phone: string,
                    public Email: string,
                    public Organization: string,
                    public Title: string,
                    public Address: string,
                    public Id?: number) {

            super();

            this.Id = Id;
            this.Title = Title;
            this.Phone = Phone;
            this.Email = Email;
            this.Organization = Organization;
            this.Title = Title;
            this.Address = Address;
        }
    }
}

