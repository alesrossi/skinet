using System.Collections.Generic;
using System.Threading.Tasks;
using System.Xml.Xsl;
using Core.Entities;
using Core.Specifications;

namespace Core.Interfaces
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        Task<T> GetByIdAsync(int id);
        Task<IReadOnlyList<T>> ListAllAsync();
        Task<T> GetEntityWithSpec(ISPecification<T> spec);
        Task<IReadOnlyList<T>> ListAsync(ISPecification<T> spec);
        Task<int> CountAsync(ISPecification<T> spec);
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}