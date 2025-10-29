import {Link} from "react-router-dom";

export function Contacts() {
    return (
        <>
            <div className="content-container">
            <nav className="navigation">
                <div className="container">
                    <div className="nav-row">
                        <div><Link className="logo" to="/"><strong>Ezzfaker</strong> portfolio</Link></div>
                        <div className="nav-list">
                            <ul className="nav-list__items">
                                <li className="nav-list__item"><Link to="/Projects"
                                                                     className="nav-list__link nav-list__link">Projects</Link>
                                </li>
                                <li className="nav-list__item"><Link to="/Skills"
                                                                     className="nav-list__link">Skills</Link>
                                </li>
                                <li className="nav-list__item"><Link to="/Contacts"
                                                                     className="nav-list__link--active">Contacts</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
            </nav>
                <main className="contact-wrapper">
                    <h1>Contacts</h1>
                    <h2>Location</h2>
                    <p>Belarus, Gomel</p>
                    <h2>Telegram / WhatsApp</h2>
                    <p>number</p>
                    <h2>Email</h2>
                    <p>Почта</p>
                </main>
                </div>
            <footer className="footer">
                <ul className="footer-links">
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="../../public/icons/gitHub.svg" alt=""/>
                        </a>
                    </li>
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="../../public/icons/linkedIn.svg" alt=""/>
                        </a>
                    </li>
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="../../public/icons/twitter.svg" alt=""/>
                        </a>
                    </li>
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="../../public/icons/vk.svg" alt=""/>
                        </a>
                    </li>
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="../../public/icons/instagram.svg" alt=""/>
                        </a>
                    </li>
                </ul>
                <p className="copyright">© frontend-dev.com</p>
            </footer>
        </>
    )
}