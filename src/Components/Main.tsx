import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage.ts";


export function Main() {
const [theme, setTheme] = useLocalStorage("theme", "light");

    const themeHandler = () => {
        setTheme(theme === "light"? "dark" : "light")
    }

    useEffect(() => {
       document.body.className = theme
    }, [theme])

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
                                <img src="../../public/icons/Sun.svg" alt="Light mode" className="dark-mode-btn__icon"/>
                                <img src="../../public/icons/Moon.svg" alt="Dark mode" className="dark-mode-btn__icon"/>
                            </button>
                        </div>
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
            <header className="header">
                <div className="header-container">
                    <div className="header-container__content-wrapper">
                        <h1 className="header-text"><strong>Hi, my name is <span>Roma</span></strong> <br/>a frontend
                            developer</h1>
                        <p className="header-other">with passion for learning and creating</p>
                        <div className="header-link"><a className="header-cvLink" href="#">Download CV</a></div>
                    </div>
                </div>
            </header>
            <main className="main">
                <div className="container">
                    <h2 className="main-title">Projects</h2>
                    <ul className="projects">
                        <li className="project">

                            <a className="main-link" href="/index.html"><img src="../public/assets/06.jpg" alt=""
                                                                             className="main-link__img"/>
                                <h3 className="main-link__text">
                                    gaming streaming portal
                                </h3>
                            </a>
                            <a className="main-link" href="/index.html"><img src="../public/assets/01.jpg" alt=""
                                                                             className="main-link__img"/>
                                <h3 className="main-link__text">
                                    gaming streaming portal
                                </h3>
                            </a>
                            <a className="main-link" href="/index.html"><img src="../public/assets/02.jpg" alt=""
                                                                             className="main-link__img"/>
                                <h3 className="main-link__text">
                                    gaming streaming portal
                                </h3>
                            </a>
                            <a className="main-link" href="/index.html"><img src="../public/assets/03.jpg" alt=""
                                                                             className="main-link__img"/>
                                <h3 className="main-link__text">
                                    gaming streaming portal
                                </h3>
                            </a>
                            <a className="main-link" href="/index.html"><img src="../public/assets/04.jpg" alt=""
                                                                             className="main-link__img"/>
                                <h3 className="main-link__text">
                                    gaming streaming portal
                                </h3>
                            </a>
                            <a className="main-link" href="/index.html"><img src="../public/assets/05.jpg" alt=""
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
                <p className="copyright">© faker-dev.com</p>
            </footer>
        </>

    )
}