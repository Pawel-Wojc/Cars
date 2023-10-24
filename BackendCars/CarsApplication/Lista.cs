using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CarsDomain;
using CarsPersistence;
using Microsoft.EntityFrameworkCore;

namespace CarsApplication
{
    public class Lista
    {
        public class Query : IRequest<List<Car>> { }
        public class Handler : IRequestHandler<Query, List<Car>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Car>> Handle(Query request, CancellationToken cancellationToken) {
                return await _context.Cars.ToListAsync(); 
            }
        }
    }
}
