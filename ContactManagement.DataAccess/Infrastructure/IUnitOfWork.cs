namespace ContactManagement.DataAccess.Infrastructure
{
    public interface IUnitOfWork
    {
        void Commit();
    }
}
