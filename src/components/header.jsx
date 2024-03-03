import '../styles/header.css'
import logo from '../images/pokemon-logo.png'

function Header() {

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Pokemon logo" />
            </div>
            <div className="title">Memory Card Game</div>
            <div className="info">Don't click on the same pokemon twice!</div>
        </div>

    );
}

export default Header;
