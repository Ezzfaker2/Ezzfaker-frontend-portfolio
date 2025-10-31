import {Link} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../contexts/Context.ts";

export function Contacts() {
    const {theme, themeHandler} = useContext(Context);
    return (
        <>
            <div className="content-container">
                <nav className="navigation">
                    <div className="container">
                        <div className="nav-row">
                            <div>
                                <Link className="logo" to="/"><strong>Ezzfaker</strong> portfolio</Link>
                            </div>
                            <div className="theme-container">
                                <button className={theme === "dark" ? "dark-mode-btn--active dark-mode-btn" : "dark-mode-btn"}
                                        onClick={themeHandler}>
                                    <img src="/assets/icons/Sun.svg" alt="Light mode" className="dark-mode-btn__icon"/>
                                    <img src="/assets/icons/Moon.svg" alt="Dark mode" className="dark-mode-btn__icon"/>
                                </button>
                            </div>
                            <div className="nav-list">
                                <ul className="nav-list__items">
                                    <li className="nav-list__item"><Link to="/Projects"
                                                                         className="nav-list__link nav-list__link">Projects </Link>
                                    </li>
                                    <li className="nav-list__item"><Link to="/Skills"
                                                                         className="nav-list__link"> Skills </Link>
                                    </li>
                                    <li className="nav-list__item"><Link to="/Contacts"
                                                                         className="nav-list__link--active">Contacts </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </nav>
                <main className="contact-wrapper">
                    <h1>Contacts</h1>
                    <h2>Telegram / WhatsApp</h2>
                    <p>+375447287415 - Belarus number</p>
                    <p>+79163815595 - Russian number</p>
                    <h2>Email</h2>
                    <p>ezzproggers@gmail.com</p>
                    <h2>Location</h2>
                    <p>Belarus, Gomel</p>
                </main>
                </div>
            <footer className="footer">
                <ul className="footer-links">
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="/assets/icons/gitHub.svg" alt=""/>
                        </a>
                    </li>
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="/assets/icons/linkedIn.svg" alt=""/>
                        </a>
                    </li>
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="/assets/icons/twitter.svg" alt=""/>
                        </a>
                    </li>
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="/assets/icons/vk.svg" alt=""/>
                        </a>
                    </li>
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="/assets/icons/instagram.svg" alt=""/>
                        </a>
                    </li>
                </ul>
                <p className="copyright">© frontend-dev.com</p>
            </footer>
        </>
    )
}