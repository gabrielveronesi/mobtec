using System.ComponentModel.DataAnnotations;

namespace server.Models.Entity
{
    public class Foto
    {
        ///<summary>
        /// Identificador da foto
        ///</summary>
        [Required]
        [Key]
        public int idFoto { get; set; }

        ///<summary>
        /// Identificador da casa
        ///</summary>
        public int idCasa { get; set; }

        ///<summary>
        /// Identificador do cliente
        ///</summary>
        public int idCliente { get; set; }

        ///<summary>
        /// Url da imagem
        ///</summary>
        public string urlFoto { get; set; }
    }
}