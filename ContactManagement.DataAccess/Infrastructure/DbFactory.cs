namespace ContactManagement.DataAccess.Infrastructure
{
    public class DbFactory : Disposable, IDbFactory
    {
        ContactManagementContext dbContext;

        public ContactManagementContext Init()
        {
            return dbContext ?? (dbContext = new ContactManagementContext());
        }

        protected override void DisposeCore()
        {
            if (dbContext != null)
                dbContext.Dispose();
        }
    }
}
