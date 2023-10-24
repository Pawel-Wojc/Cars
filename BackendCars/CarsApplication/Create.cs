using CarsDomain;
using CarsPersistence;
using MediatR;

namespace CarsApplication
{
    public class Create
    {
        public class Command : IRequest
        {
            public Car Car { get; set; }
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
                _context.Cars.Add(request.Car);
                await _context.SaveChangesAsync();
                return;
            }



        }
    }
}
