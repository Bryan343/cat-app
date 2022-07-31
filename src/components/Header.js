import logo from '../media/logo.png';

function Header() {
    return (
        <header className="header">
        <div className="header-containers logo">
            <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="header-containers search">
            <div className="search-bar">
                <div className="search-input">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
        <div className="header-containers user">
            <button className="button main-button">New post</button>
            <button className="button secondary-button">Sign in</button>
        </div>
      </header>
    );
}

export default Header;