import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [selected, setSelected] = useState(null);
    /*Tentei por um sombreamento na hora de selecionar, mas perde a responsividade, então desisti.*/
    return (
        <div style={{ fontFamily: 'Times New Roman', fontSize: '35px', marginBottom: '80px'}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-black">
                <div className="container">
                    <div className="coll7apse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/" style={{ fontStyle: 'italic', fontWeight: 'bold' }}><strong>Catálago</strong> </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/dados" style={{ fontStyle: 'italic', fontWeight: 'bold' }}><strong>Novo</strong> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )       
}
export default Nav;
