
using CarsDomain;
using CarsPersistence;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CarsApplication;
using System.Net;

namespace CarsApi.Controllers
{
    public class CarsController : BaseApiController 
    {
        private readonly IMediator _mediator;

        //private readonly DataContext _context;
        public CarsController(IMediator mediator )
        {
            
            _mediator = mediator;
        }
        [HttpGet]

        public async Task<ActionResult<List<Car>>> GetCars() {
            return await _mediator.Send(new Lista.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Car>> GetCar(Guid id)
        {
            //return await _context.Cars.FindAsync(id);
            return await _mediator.Send(new Details.Query { Id = id});
        }

        [HttpPost]
        public async Task<ActionResult> CreateCar(Car car)
        {
             await _mediator.Send(new Create.Command {Car = car });
            return StatusCode(201);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(Guid id)
        {
            await _mediator.Send(new Delete.Command { Id = id });
            return StatusCode(201);
       }
        
        [HttpPut]
        public async Task<ActionResult> Edit(Car car)
        {
            await _mediator.Send(new Edit.Command { Car = car });
            return StatusCode(201);
        }


    }
}
