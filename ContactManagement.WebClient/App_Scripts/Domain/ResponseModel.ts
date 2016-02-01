
module App_Scripts.Domain {
    "use strict";

    export interface IResponseModel {
        Data: Object;
        IsSuccess: boolean;
        Message: string;
       
    }

    export class ResponseModel extends EntityBase implements IResponseModel {
        constructor(public Data: Object,
            public IsSuccess: boolean,
            public Message: string) {

            super();

            this.Data = Data;
            this.IsSuccess = IsSuccess;
            this.Message = Message;
        }
    }
}

