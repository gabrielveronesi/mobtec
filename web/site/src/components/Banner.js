
import banner from "../banner.jpg"
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <p>Busque o imóvel perfeiro para você!</p>
                                <h2 className="mt-2 mb-4 banner-title"><strong> Pesquisar Imóvel</strong> </h2>
                                <div className="search-area">
                                    <input type="text" className="inp-search" placeholder="Ex: Bairro Alto" />
                                    <button className="btn-search m-2">Procurar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;