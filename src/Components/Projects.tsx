import {Link} from "react-router-dom";

export function Projects() {
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
                                                                         className="nav-list__link nav-list__link--active">Projects</Link>
                                    </li>
                                    <li className="nav-list__item"><Link to="/Skills"
                                                                         className="nav-list__link">Skills</Link>
                                    </li>
                                    <li className="nav-list__item"><Link to="/Contacts"
                                                                         className="nav-list__link">Contacts</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </nav>
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