using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Api.Data.OrderRepository;

namespace Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddDbContext<ProductContext>(options =>
          options.UseSqlServer(Configuration.GetConnectionString("ProductContext")));
            services.AddDbContext<OrderContext>(options =>
          options.UseSqlServer(Configuration.GetConnectionString("OrderContext")));

            services.AddScoped<ProductDataInitializer>();
            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<OrderDataInitializer>();
            services.AddScoped<IOrderRepository, OrderRepository>();
            // Register the Swagger services
            services.AddOpenApiDocument(c =>
            {
                c.DocumentName = "apidocs";
                c.Title = "Product API";
                c.Version = "v1";
                c.Description = "The Product API documentation description.";
            }); //for OpenAPI 3.0 else AddSwaggerDocument();

            services.AddCors(options => options.AddPolicy("AllowAllOrigins", builder => builder.AllowAnyOrigin()));
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ProductDataInitializer productDataInitializer, OrderDataInitializer orderDataInitializer)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            // Register the Swagger generator and the Swagger UI middlewares
            app.UseOpenApi();
            app.UseSwaggerUi3();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            productDataInitializer.InitializeData(); //.Wait();
            orderDataInitializer.InitializeData();
        }
    }
}
