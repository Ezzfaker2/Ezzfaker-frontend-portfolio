import {Link} from "react-router-dom";
import * as icons from "../../../public/assets/icons";
import {useContext} from "react";
import {Context} from "../../contexts/Context.ts";

export const Navigation = () => {
  const {theme, themeHandler} = useContext(Context);
  return (
    <>
      <nav className="navigation">
        <div className="container">
          <div className="nav-row">
            <div>
              <Link
                className="logo"
                to="/"
              ><strong>Ezzfaker</strong> portfolio</Link>
            </div>
            <div className="theme-container">
              <button
                className={theme === "dark" ? "dark-mode-btn--active dark-mode-btn" : "dark-mode-btn"}
                onClick={themeHandler}
              >
                <img
                  src={icons.Sun}
                  alt="Light mode"
                  className="dark-mode-btn__icon"
                />
                <img
                  src={icons.Moon}
                  alt="Dark mode"
                  className="dark-mode-btn__icon"
                />
              </button>
            </div>
            <div className="nav-list">
              <ul className="nav-list__items">
                <li className="nav-list__item"><Link
                  to="/Projects"
                  className="nav-list__link nav-list__link--active"
                >Projects </Link>
                </li>
                <li className="nav-list__item"><Link
                  to="/Skills"
                  className="nav-list__link"
                > Skills </Link>
                </li>
                <li className="nav-list__item"><Link
                  to="/Contacts"
                  className="nav-list__link"
                >Contacts </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </nav>
    </>
  );
};

