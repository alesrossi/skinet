namespace API.Errors
{
    public class ApiException : ApiResponse
    {
        public ApiException(int statusCode, string message = null, string destails = null) : base(statusCode, message)
        {
            Details = destails;
        }

        public string Details { get; set; }
    }
}