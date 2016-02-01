using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ContactManagement.DataAccess.Configurations;
using ContactManagement.Entities;

namespace ContactManagement.DataAccess
{
    public class ContactManagementContext:DbContext
    {
        public ContactManagementContext()
            : base("ContactManagement")
        {
            Database.SetInitializer<ContactManagementContext>(null);
        }

        #region Entity Sets
        public IDbSet<ContactPerson> ContactPersonSet { get; set; }
       
        #endregion

        public virtual void Commit()
        {
            base.SaveChanges();
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Configurations.Add(new ContactPersonConfiguration());
           ;
        }

    }
}
