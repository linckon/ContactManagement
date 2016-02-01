using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ContactManagement.Entities;
using ContactManagement.Services.Abstract;
using ContactManagement.ViewModel;

namespace ContactManagement.ApiApplication.Controllers
{
    public class ContactPersonController : ApiController
    {
        private IContactPersonService _contactPersonService;

        public ContactPersonController(IContactPersonService contactPersonService)
        {
            _contactPersonService = contactPersonService;
        }

        public ResponseModel Get()
        {
            ResponseModel response;
            try
            {
                List<ContactPersonViewModel> contactPersons = _contactPersonService.GetAll();
                response = new ResponseModel(contactPersons);
            }
            catch (Exception exception)
            {
                response = new ResponseModel(null, false, "Error occurred", exception);
            }
            return response;
        }

        public ResponseModel Get(int id)
        {
            ContactPerson contactPerson = _contactPersonService.GetById(id);
            contactPerson = new ContactPerson() { Id = contactPerson.Id, Name = contactPerson.Name, Phone = contactPerson.Phone, Email = contactPerson.Email, Organization = contactPerson.Organization, Title = contactPerson.Title, Address = contactPerson.Address };
            return new ResponseModel(contactPerson);
        }
        public ResponseModel Post(ContactPerson contactPerson)
        {
            ResponseModel response;
            try
            {
                int save = _contactPersonService.Save(contactPerson);
                response = save > 0 ? new ResponseModel(save) : new ResponseModel(null, false, "Couldn't save");
            }
            catch (Exception exception)
            {
                response = new ResponseModel(null, false, "Error occurred", exception);
            }
            return response;
        }
        public ResponseModel Delete(int id)
        {
            ResponseModel response;
            try
            {
                bool deleted = _contactPersonService.Delete(id);
                response = deleted ? new ResponseModel(id) : new ResponseModel(null, false, "Couldn't delete");
            }
            catch (Exception exception)
            {
                response = new ResponseModel(null, false, "Error occurred", exception);
            }
            return response;
        }

    }
}
