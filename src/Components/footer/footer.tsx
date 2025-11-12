import * as icons from "../../../public/assets/icons";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <ul className="footer-links">
          <li className="footer-links__element">
            <a
              href=""
              className="links__element__url"
            >
              <img
                src={icons.github}
                alt=""
              />
            </a>
          </li>
          <li className="footer-links__element">
            <a
              href=""
              className="links__element__url"
            >
              <img
                src={icons.linkedIn}
                alt=""
              />
            </a>
          </li>
          <li className="footer-links__element">
            <a
              href=""
              className="links__element__url"
            >
              <img
                src={icons.Twitter}
                alt=""
              />
            </a>
          </li>
          <li className="footer-links__element">
            <a
              href=""
              className="links__element__url"
            >
              <img
                src={icons.vk}
                alt=""
              />
            </a>
          </li>
          <li className="footer-links__element">
            <a
              href=""
              className="links__element__url"
            >
              <img
                src={icons.instagram}
                alt=""
              />
            </a>
          </li>
        </ul>
        <p className="copyright">© faker-dev.com</p>
      </footer>
    </>
  );
};

