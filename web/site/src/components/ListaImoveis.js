
import Titulo from "./Titulo"
import './ListaImoveis.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ListaImoveis = () => {

    const { page } = useParams()

    const title = {
        text: "Imóveis em destaques",
        description: "Lista de imóveis que lhe podem interessar"
    }

    const [casas, setCasas] = useState([]);

    useEffect(() => {

        const _listarCasasSite = async () => {
            const response = await fetch('https://localhost:5001/site/listar-casas-site', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    urlCliente: 'imobiliaria-modelo',
                    paginaParametros: {
                        paginaNumero: page,
                        paginaTamanho: 9,
                        busca: null
                    }
                })
            });

            const data = await response.json();
            setCasas(data);
        }

        _listarCasasSite().catch(console.error)

    }, [page]);

    var a = casas[1];
    let rows = [];

    if (a != null)
    {
        for (let i = 1; i <= a.totalPaginas; i++) {
            rows.push(<li key="i" class="page-item"><a class="page-link" href={'/' + i}>{i}</a></li>)
        }
    }
   
    return (
        <section className="section-all-re">
            <div className="container">
                <Titulo title={title.text} description={title.description} />
                <div className="row">
                    {casas.map(casa => {
                        return (
                            <div className="text-center col-lg-4 col-12 col-md-6 " >
                                <div className="item">
                                    <div className="item-image">
                                        <img className="img-fluid" src="/img/product1.jpeg" alt="flat" />
                                    </div>
                                    <div className="item-description">
                                        <div className="d-flex justify-content-between mb-3">
                                            <span className="item-title">{casa.titulo}</span>
                                            <span className="item-price">R${casa.valor.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
                                        </div>
                                        <div className="item-icon d-flex alig-items-center justify-content-between">
                                            <div>
                                                <i className="fas fa-check-circle"></i> <span>{casa.pequenaDescricao}</span>
                                            </div>
                                            <div className="item-title">
                                                <button className="btn btn-detail">Visualizar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        )
                    })};
                </div>
            </div>

            <div>
                <nav aria-label="Navegação de página exemplo">
                    <ul class="pagination">
                        <li key="a" class="page-item"><a class="page-link" href="/s">Anterior</a></li>
                        {rows}
                        <li key="ad" class="page-item"><a class="page-link" href="/a">Próximo</a></li>
                    </ul>
                </nav>
            </div>

        </section>
    )

}

export default ListaImoveis;