
import banner from "../banner.jpg"
import './Banner.css';
import { useEffect, useState } from 'react';
import ListaImoveis from "./ListaImoveis";


const Banner = () => {

    const [busca, setBusca] = useState('');

    console.log(ListaImoveis.casas);
    var casasNome = ['banana', 'uva' , 'rets'];
    const casasFiltradas = casasNome.filter((casa) => casa.startsWith(busca));

    console.log(casasFiltradas);

    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <h2 className="mt-2 mb-4 banner-title"><strong> Pesquisar Imóvel</strong> </h2>
                                <p>Busque por cidade, bairro ou endereço.</p>

                                <div className="search-area">
                                    <input type="text"
                                        className="inp-search"
                                        placeholder="Ex: São Paulo"
                                        value={busca}
                                        onChange={(ev) => setBusca(ev.target.value)}
                                    />
                                    <button className="btn-search m-2">Procurar</button>
                                </div>aaaaaaaaaaaaaaaa
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;