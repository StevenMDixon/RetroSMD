using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RetroSMD.Server.Context;
using RetroSMD.Server.Models;
using System.ComponentModel;

namespace RetroSMD.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class QuoteServicesController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public QuoteServicesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/QuoteServices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<QuoteServices>>> GetQuoteServices()
        {
            return await _context.quoteServices.ToListAsync();
        }

        // GET: api/QuoteServices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<QuoteServices>> GetQuoteServices(int id)
        {
            var quoteServices = await _context.quoteServices.FindAsync(id);

            if (quoteServices == null)
            {
                return NotFound();
            }

            return quoteServices;
        }

        // PUT: api/QuoteServices/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQuoteServices(int id, QuoteServices quoteServices)
        {
            if (id != quoteServices.QuoteServiceID)
            {
                return BadRequest();
            }

            _context.Entry(quoteServices).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuoteServicesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/QuoteServices
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<QuoteServices>> PostQuoteServices(QuoteServices quoteServices)
        {
            _context.quoteServices.Add(quoteServices);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (QuoteServicesExists(quoteServices.QuoteServiceID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetQuoteServices", new { id = quoteServices.QuoteServiceID }, quoteServices);
        }

        // DELETE: api/QuoteServices/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuoteServices(int id)
        {
            var quoteServices = await _context.quoteServices.FindAsync(id);
            if (quoteServices == null)
            {
                return NotFound();
            }

            _context.quoteServices.Remove(quoteServices);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool QuoteServicesExists(int id)
        {
            return _context.quoteServices.Any(e => e.QuoteServiceID == id);
        }
    }
}
