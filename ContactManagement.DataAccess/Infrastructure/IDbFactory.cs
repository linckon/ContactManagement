using System;

namespace ContactManagement.DataAccess.Infrastructure
{
    public interface IDbFactory : IDisposable
    {
        ContactManagementContext Init();
    }
}
