using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactManagement.ViewModel
{
    public class ContactPersonViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Organization { get; set; }
        public string Title { get; set; }
        public string Address { get; set; }
    }
}
