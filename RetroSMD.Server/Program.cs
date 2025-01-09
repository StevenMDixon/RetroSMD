using Microsoft.Extensions.Hosting;
using System.Collections.Generic;
using System.Reflection.Metadata;
using Microsoft.EntityFrameworkCore;
using RetroSMD.Server.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var c = builder.Configuration.GetConnectionString("DatabaseConnection");
if (c is null || c == string.Empty)
{
    c = Environment.GetEnvironmentVariable("DatabaseConnection");
}

Console.WriteLine(c);

builder.Services.AddDbContext<DatabaseContext>(opt =>
    opt.UseNpgsql(c));

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