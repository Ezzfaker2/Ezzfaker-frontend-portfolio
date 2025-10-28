import './App.css'

function Header() {
    return (
        <>
            <nav className="navigation">
                <div className="container">
                    <div className="nav-row">
                        <div><a className="logo" href="/index.html"><strong>Ezzfaker</strong> portfolio</a></div>
                        <div className="nav-list">
                            <ul className="nav-list__items">
                                <li className="nav-list__item"><a href="/index.html"
                                                                  className="nav-list__link nav-list__link--active">Projects</a>
                                </li>
                                <li className="nav-list__item"><a href="/index.html"
                                                                  className="nav-list__link">Skills</a>
                                </li>
                                <li className="nav-list__item"><a href="/index.html"
                                                                  className="nav-list__link">Contacts</a>
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
            <footer className="footer">
                <ul className="footer-links">
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="../public/icons/gitHub.svg" alt=""/>
                        </a>
                    </li>
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="../public/icons/linkedIn.svg" alt=""/>
                        </a>
                    </li>
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="../public/icons/twitter.svg" alt=""/>
                        </a>
                    </li>
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="../public/icons/vk.svg" alt=""/>
                        </a>
                    </li>
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="../public/icons/instagram.svg" alt=""/>
                        </a>
                    </li>
                </ul>
                <p className="copyright">© frontend-dev.com</p>
            </footer>
        </>

    )
}


function App() {


    return (
        <>
            <Header/>
        </>
    )
}

export default App
