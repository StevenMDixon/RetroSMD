using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RetroSMD.Server.Context;
using RetroSMD.Server.Models;

namespace RetroSMD.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class QuoteStatusController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public QuoteStatusController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/QuoteStatus
        [HttpGet]
        public async Task<ActionResult<IEnumerable<QuoteStatus>>> GetQuoteStatus()
        {
            return await _context.quoteStatus.ToListAsync();
        }

        // GET: api/QuoteStatus/5
        [HttpGet("{id}")]
        public async Task<ActionResult<QuoteStatus>> GetQuoteStatus(int id)
        {
            var quoteStatus = await _context.quoteStatus.FindAsync(id);

            if (quoteStatus == null)
            {
                return NotFound();
            }

            return quoteStatus;
        }

        // PUT: api/QuoteStatus/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQuoteStatus(int id, QuoteStatus quoteStatus)
        {
            if (id != quoteStatus.StatusID)
            {
                return BadRequest();
            }

            _context.Entry(quoteStatus).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuoteStatusExists(id))
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

        // POST: api/QuoteStatus
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<QuoteStatus>> PostQuoteStatus(QuoteStatus quoteStatus)
        {
            _context.quoteStatus.Add(quoteStatus);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetQuoteStatus", new { id = quoteStatus.StatusID }, quoteStatus);
        }

        // DELETE: api/QuoteStatus/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuoteStatus(int id)
        {
            var quoteStatus = await _context.quoteStatus.FindAsync(id);
            if (quoteStatus == null)
            {
                return NotFound();
            }

            _context.quoteStatus.Remove(quoteStatus);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool QuoteStatusExists(int id)
        {
            return _context.quoteStatus.Any(e => e.StatusID == id);
        }
    }
}
