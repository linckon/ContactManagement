using System;

namespace ContactManagement.ViewModel
{
    public class ResponseModel
    {
        public ResponseModel(object data = null, bool isSuccess = true, string message = "Success", Exception exception = null)
        {
            Data = data;
            IsSuccess = isSuccess;
            Message = message;
           Exception = exception;
        }

        public object Data { get; set; }
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public Exception Exception { get; set; }
    }
}
