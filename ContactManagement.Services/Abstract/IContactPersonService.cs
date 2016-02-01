using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ContactManagement.Entities;
using ContactManagement.ViewModel;

namespace ContactManagement.Services.Abstract
{
    public interface IContactPersonService
    {
        List<ContactPersonViewModel> GetAll();
        int Save(ContactPerson project);
        ContactPerson GetById(int id);
        bool Delete(int id);
    }
}
