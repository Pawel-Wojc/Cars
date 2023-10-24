using Microsoft.EntityFrameworkCore;
using CarsPersistence;
using CarsApplication;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//konteks bazy danych
builder.Services.AddDbContext<DataContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});


builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(
    typeof(Lista.Handler).Assembly));


//te linijki sa potrzbne do tego by api działało
builder.Services.AddCors(opt =>
{
    opt.AddPolicy("CorsPolicy", policy =>
        {
            //ufam temu adresowi, niezależnie od nagłowa lub metody (post, put,, etc.)
            policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");

        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CorsPolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();


using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

//

/*try {
    var context = services.GetRequiredService<DataContext>(
        context.Database.Migrate();

} catch (Exception ex) { 
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "Błąd podczas migracji");
} */

app.Run();
