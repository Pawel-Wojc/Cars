using CarsDomain;
using CarsPersistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CarsDomain;
using Microsoft.EntityFrameworkCore;

namespace CarsApplication
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }

        }

        public class Handler : IRequestHandler<Command>
        {

            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                Car car = await _context.Cars.FindAsync(request.Id);
                _context.Cars.Remove(car);
                await _context.SaveChangesAsync();
                //return await _context.Cars.Delete(request.Id);
                return;

            }

        }
    }
}
