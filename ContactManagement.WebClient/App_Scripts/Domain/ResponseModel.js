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
        var ResponseModel = (function (_super) {
            __extends(ResponseModel, _super);
            function ResponseModel(Data, IsSuccess, Message) {
                _super.call(this);
                this.Data = Data;
                this.IsSuccess = IsSuccess;
                this.Message = Message;
                this.Data = Data;
                this.IsSuccess = IsSuccess;
                this.Message = Message;
            }
            return ResponseModel;
        })(Domain.EntityBase);
        Domain.ResponseModel = ResponseModel;
    })(Domain = App_Scripts.Domain || (App_Scripts.Domain = {}));
})(App_Scripts || (App_Scripts = {}));
//# sourceMappingURL=ResponseModel.js.map