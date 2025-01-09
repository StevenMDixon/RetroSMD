using Microsoft.AspNetCore.Mvc;
using RetroSMD.Server.Context;
using RetroSMD.Server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RetroSMD.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    
    public class QuoteController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public QuoteController(DatabaseContext context)
        {
            _context = context;
        }
        // GET: api/<QuoteController>
        [HttpGet(Name = "GetQuotes")]
        public IEnumerable<Models.Car> Get()
        {
            return _context.cars.ToList();
        }

        // GET api/<QuoteController>/5
        [HttpGet("{id}")]
        public ActionResult<Models.Quote> Get(int id)
        {
            var quote = _context.Quotes.Find(id);
            Console.WriteLine(quote);
            if (quote == null)
            {
                return NotFound();
            }
            return quote;
        }

        // POST api/<QuoteController>
        [HttpPost]
        public void Post([FromBody] Models.Quote value)
        {
            _context.Quotes.Add(value);
            _context.SaveChanges();
        }

        // PUT api/<QuoteController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Models.Quote value)
        {
            //var quote = _context.Quotes.Find(id);
            //if (quote != null)
            //{
            //    quote.Text = value.Text;
            //    _context.SaveChanges();
            //}
        }

        // DELETE api/<QuoteController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var quote = _context.Quotes.Find(id);
            if (quote != null)
            {
                _context.Quotes.Remove(quote);
                _context.SaveChanges();
            }
        }
    }
}
