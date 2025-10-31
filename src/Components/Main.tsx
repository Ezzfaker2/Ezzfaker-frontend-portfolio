import {Link} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../contexts/Context.ts";


export function Main() {
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
                                <button
                                    className={theme === "dark" ? "dark-mode-btn--active dark-mode-btn" : "dark-mode-btn"}
                                    onClick={themeHandler}>
                                    <img src="/assets/icons/Sun.svg" alt="Light mode" className="dark-mode-btn__icon"/>
                                    <img src="/assets/icons/Moon.svg" alt="Dark mode" className="dark-mode-btn__icon"/>
                                </button>
                            </div>
                            <div className="nav-list">
                                <ul className="nav-list__items">
                                    <li className="nav-list__item"><Link to="/Projects"
                                                                         className="nav-list__link nav-list__link--active">Projects </Link>
                                    </li>
                                    <li className="nav-list__item"><Link to="/Skills"
                                                                         className="nav-list__link"> Skills </Link>
                                    </li>
                                    <li className="nav-list__item"><Link to="/Contacts"
                                                                         className="nav-list__link">Contacts </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </nav>
                <header className="header">
                    <div className="header-container">
                        <div className="header-container__content-wrapper">
                            <h1 className="header-text"><strong>Hi, my name is <span>Roma</span></strong> <br/><em
                                className="serif-normal"> <span> Designer</span></em>
                                <span className="span__other__q"> and developer of things</span></h1>
                            <p className="header-other">A frontend developer. <span className="header-info__span">Let me show you...</span>
                            </p>
                            <div className="header-link"><a className="header-cvLink" href="#">Download CV</a></div>
                        </div>
                    </div>
                </header>
                <main className="main">
                    <div className="container">
                        <h2 className="main-title">Projects</h2>
                        <ul className="projects">
                            <li className="project">

                                <a className="main-link" href="/index.html"><img src="/assets/01.jpg" alt=""
                                                                                 className="main-link__img"/>
                                    <h3 className="main-link__text">
                                        gaming streaming portal
                                    </h3>
                                </a>
                                <a className="main-link" href="/index.html"><img src="/assets/02.jpg" alt=""
                                                                                 className="main-link__img"/>
                                    <h3 className="main-link__text">
                                        gaming streaming portal
                                    </h3>
                                </a>
                                <a className="main-link" href="/index.html"><img src="/assets/03.jpg" alt=""
                                                                                 className="main-link__img"/>
                                    <h3 className="main-link__text">
                                        gaming streaming portal
                                    </h3>
                                </a>
                                <a className="main-link" href="/index.html"><img src="/assets/04.jpg" alt=""
                                                                                 className="main-link__img"/>
                                    <h3 className="main-link__text">
                                        gaming streaming portal
                                    </h3>
                                </a>
                                <a className="main-link" href="/index.html"><img src="/assets/05.jpg" alt=""
                                                                                 className="main-link__img"/>
                                    <h3 className="main-link__text">
                                        gaming streaming portal
                                    </h3>
                                </a>
                                <a className="main-link" href="/index.html"><img src="/assets/06.jpg" alt=""
                                                                                 className="main-link__img"/>
                                    <h3 className="main-link__text">
                                        gaming streaming portal
                                    </h3>
                                </a>

                            </li>
                        </ul>
                    </div>
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
                <p className="copyright">© faker-dev.com</p>
            </footer>
        </>

    )
}