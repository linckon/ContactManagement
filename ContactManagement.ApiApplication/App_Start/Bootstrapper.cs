using System.Web.Http;

namespace ContactManagement.ApiApplication
{
    public class Bootstrapper
    {
        public static void Run()
        {
            // Configure Autofac
            AutofacWebapiConfig.Initialize(GlobalConfiguration.Configuration);
           
        }
    }
}