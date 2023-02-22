import React from 'react';

import './Header.css';

function Header() {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
    
              <div className="campo-logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMq8pNrO-4qbK1iFG6dcSF3PabKPXgOhXj-g&usqp=CAU" className="logo" alt="Logo"/>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <div className="nav-link" to="/">Início</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" to="/blog">Sobre</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" to="/about">Contato</div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header;
