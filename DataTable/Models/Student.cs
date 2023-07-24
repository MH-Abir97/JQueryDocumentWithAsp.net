﻿using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataTable.Models
{
    public class Student
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public List<SelectListItem> Options { get; set; }


    }

    
}
