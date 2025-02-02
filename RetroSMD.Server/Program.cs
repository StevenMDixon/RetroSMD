using Microsoft.EntityFrameworkCore;
using RetroSMD.Server.Context;
using RetroSMD.Server.Controllers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

string? dbConnectionString = builder.Configuration.GetConnectionString("DatabaseConnection");
if (dbConnectionString is null || dbConnectionString == string.Empty)
{
    dbConnectionString = Environment.GetEnvironmentVariable("DatabaseConnection");
}

builder.Services.AddDbContext<DatabaseContext>(opt => opt.UseNpgsql(dbConnectionString));

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();