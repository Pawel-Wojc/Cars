﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarsDomain
{
    public enum FuelType { Petrol, Hybrid, Diesel, LPG};
    public enum BodyType {Hatchback, Sedam, Kombi, SUV, Roadster }
    public class Car
    {
        public Guid Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public int DoorsNumber {  get; set; }
        public int LuggageCapacity { get; set; }
        public int EngineCapacity { get;set; }
        public FuelType FuelType { get; set;}

        public DateTime ProductionDate { get; set; }

        public double CarFuelConsumption {  get; set; }

        public BodyType BodyType { get; set; }

    }
}
