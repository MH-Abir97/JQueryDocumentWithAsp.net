﻿using DataTable.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace DataTable.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult About()
        {
            //Dictionary<int, Student> list = new Dictionary<int, Student>();
            //list.Add(1,new Student { Id=1,Name="Abir"});
            //list.Add(2, new Student { Id = 2, Name = "Suvo" });
            //list.Add(3, new Student { Id = 3, Name = "Bellal" });
            //list.Add(4, new Student { Id = 4, Name = "Nayeem" });
            //list.Add(5, new Student { Id = 5, Name = "Fysal" });
            //list.Add(6, new Student { Id = 6, Name = "Suja Uddin" });
            //ViewData["Student"] = list;
            //ViewBag.Student = list;

            //TempData["StudentTemp"] = list;

            //List<string> Student = new List<string>();
            //Student.Add("Jignesh");
            //Student.Add("Tejas");
            //Student.Add("Rakesh");


            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }


        //public class Student
        //{
        //    public int Id { get; set; }
        //    public string Name { get; set; }
        //}
    }
}
