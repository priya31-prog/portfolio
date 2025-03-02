import '../stylesheets/header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>Priyadarsini K</h1>
                <p className="title">Developer</p>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;