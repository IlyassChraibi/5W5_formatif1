using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using _5W5_formatif1.Models;

namespace _5W5_formatif1.Data
{
    public class _5W5_formatif1Context : DbContext
    {
        public _5W5_formatif1Context (DbContextOptions<_5W5_formatif1Context> options)
            : base(options)
        {
        }

        public DbSet<_5W5_formatif1.Models.Bill> Bill { get; set; } = default!;
    }
}
