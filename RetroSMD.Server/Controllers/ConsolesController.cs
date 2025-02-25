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
    [Route("api/[controller]")]
    [ApiController]
    public class ConsolesController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public ConsolesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Consoles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Consoles>>> GetConsoles()
        {
            return await _context.Consoles.ToListAsync();
        }

        // GET: api/Consoles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Consoles>> GetConsoles(int id)
        {
            var consoles = await _context.Consoles.FindAsync(id);

            if (consoles == null)
            {
                return NotFound();
            }

            return consoles;
        }

        // PUT: api/Consoles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConsoles(int id, Consoles consoles)
        {
            if (id != consoles.ConsoleID)
            {
                return BadRequest();
            }

            _context.Entry(consoles).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConsolesExists(id))
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

        // POST: api/Consoles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Consoles>> PostConsoles(Consoles consoles)
        {
            _context.Consoles.Add(consoles);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConsoles", new { id = consoles.ConsoleID }, consoles);
        }

        // DELETE: api/Consoles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConsoles(int id)
        {
            var consoles = await _context.Consoles.FindAsync(id);
            if (consoles == null)
            {
                return NotFound();
            }

            _context.Consoles.Remove(consoles);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ConsolesExists(int id)
        {
            return _context.Consoles.Any(e => e.ConsoleID == id);
        }
    }
}
