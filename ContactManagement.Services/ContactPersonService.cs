using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ContactManagement.DataAccess.Infrastructure;
using ContactManagement.DataAccess.Repositories;
using ContactManagement.Entities;
using ContactManagement.Services.Abstract;
using ContactManagement.ViewModel;

namespace ContactManagement.Services
{
    public class ContactPersonService : IContactPersonService
    {
        #region Variables
        private readonly IEntityBaseRepository<ContactPerson> _contactPersonRepository;
       
        private readonly IUnitOfWork _unitOfWork;

        public ContactPersonService(IEntityBaseRepository<ContactPerson> contactPersonRepository, IUnitOfWork unitOfWork)
        {
            _contactPersonRepository = contactPersonRepository;
            _unitOfWork = unitOfWork;
        }

        #endregion
        public bool Delete(int id)
        {
            ContactPerson contactPerson = _contactPersonRepository.GetSingle(id);
            if (contactPerson != null)
            {
                _contactPersonRepository.Delete(contactPerson);
                _unitOfWork.Commit();
            }
            return true;
        }

        public List<ContactPersonViewModel> GetAll()
        {
            var contactPersons = _contactPersonRepository.GetAll();
            List<ContactPersonViewModel> contactPersonViewModels = contactPersons.Select(c=>new ContactPersonViewModel() {Id = c.Id,Name = c.Name,Phone = c.Phone,Email = c.Email,Organization = c.Organization,Title = c.Title,Address = c.Address}).ToList();
            return contactPersonViewModels;
        }

        public ContactPerson GetById(int id)
        {
            ContactPerson contactPerson = _contactPersonRepository.GetSingle(id);
            return contactPerson;
        }

        public int Save(ContactPerson contactPerson)
        {
            ContactPerson _contactPerson ;
            if (contactPerson.Id>0)
            {
                _contactPerson = _contactPersonRepository.GetSingle(contactPerson.Id);
                if (_contactPerson !=null)
                {
                    _contactPerson.Name = contactPerson.Name;
                    _contactPerson.Phone = contactPerson.Phone;
                    _contactPerson.Email = contactPerson.Email;
                    _contactPerson.Organization = contactPerson.Organization;
                    _contactPerson.Title = contactPerson.Title;
                    _contactPerson.Address = contactPerson.Address;
                }
            }
            else
            {
                _contactPerson =_contactPersonRepository.Add(contactPerson);
            }
            _unitOfWork.Commit();
            return _contactPerson.Id;
        }
    }
}
