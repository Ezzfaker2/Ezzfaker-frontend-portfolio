import {Link} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../contexts/Context.ts";


export function Skills() {
    const {theme, themeHandler} = useContext(Context);
    return (
        <>
            <div className="content-container">
                <nav className="navigation">
                    <div className="container">
                        <div className="nav-row">
                            <div><Link className="logo" to="/"><strong>Ezzfaker</strong> portfolio</Link></div>
                            <div className="theme-container">
                                <button
                                    className={theme === "dark" ? "dark-mode-btn--active dark-mode-btn" : "dark-mode-btn"}
                                    onClick={themeHandler}>
                                    <img src="../../public/assets/icons/Sun.svg" alt="Light mode"
                                         className="dark-mode-btn__icon"/>
                                    <img src="../../public/assets/icons/Moon.svg" alt="Dark mode"
                                         className="dark-mode-btn__icon"/>
                                </button>
                            </div>
                            <div className="nav-list">
                                <ul className="nav-list__items">
                                    <li className="nav-list__item"><Link to="/Projects"
                                                                         className="nav-list__link nav-list__link">Projects</Link>
                                    </li>
                                    <li className="nav-list__item"><Link to="/Skills"
                                                                         className="nav-list__link--active">Skills</Link>
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
                <div className="Skills__container">
                    <h1>Skills</h1>
                    <h2>Frontend</h2>
                    <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn,
                        TailwindCSS, StyledComponents</p>
                    <h2>Backend</h2>
                    <h2>Other</h2>
                    <p>Info</p>
                </div>
                <div className="code-page">
      <pre className="code-container">
        <code className="js">
{`class RomanZaharchenko {
  // Some info about me.
  constructor() {
    this.name = 'Roman Zaharchenko';
    this.dayOfBirthTimestamp = 1022113567;
    this.email = 'ezzfaker@gmail.com';
  }

  workExperience() {
    return [
      { '2020-now': 'Full-stack Developer/Owner at Pixel Lab' },
      { '2023-now': 'Solutions Architect at Digitree Group S.A.' },
      { '2017-2023': 'Full-stack Developer at Digitree Group S.A.' },
      { '2013-2017': 'Full-Stack Designer at Digitree Group S.A.' },
      { '2006-now': 'Full-Stack Designer/developer at Yasio.dev' }
    ];
  }

  education() {
    return [
      { '2019-2022': 'Wyższa Szkoła Biznesu w Dąbrowie Górniczej - Master\\\\'s Degree (mgr), Computer Science (IT)' }
    ];
  }

  skills() {
    return [ 
      'HTML/CSS/JS/TS', 'Bootstrap/Tailwind', 
      'Webpack/Vite', 'SCSS', 'npm/yarn/pnpm', 
      'SPA', 'GIT'
    ];
  }
}`}
        </code>
      </pre>
                </div>

            </div>

            <footer className="footer">
                <ul className="footer-links">
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="../../public/assets/icons/gitHub.svg" alt=""/>
                        </a>
                    </li>
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="../../public/assets/icons/linkedIn.svg" alt=""/>
                        </a>
                    </li>
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="../../public/assets/icons/twitter.svg" alt=""/>
                        </a>
                    </li>
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="../../public/assets/icons/vk.svg" alt=""/>
                        </a>
                    </li>
                    <li className="footer-links__element">
                        <a href="" className="links__element__url">
                            <img src="../../public/assets/icons/instagram.svg" alt=""/>
                        </a>
                    </li>
                </ul>
                <p className="copyright">© frontend-dev.com</p>
            </footer>
        </>
    )
}