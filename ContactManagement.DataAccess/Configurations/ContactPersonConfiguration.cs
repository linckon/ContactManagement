using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ContactManagement.Entities;

namespace ContactManagement.DataAccess.Configurations
{
    public class ContactPersonConfiguration:EntityBaseConfiguration<ContactPerson>
    {
        public ContactPersonConfiguration()
        {
            Property(m => m.Name).IsRequired().HasMaxLength(100);
            Property(m => m.Phone).IsRequired().HasMaxLength(20);
            Property(m => m.Email).IsRequired().HasMaxLength(100);
            Property(m => m.Organization).IsRequired().HasMaxLength(200);
            Property(m => m.Title).IsOptional().HasMaxLength(50);
            Property(m => m.Address).HasMaxLength(1000);
          
        }
    }
}
