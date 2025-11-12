const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-container__content-wrapper">
            <h1 className="header-text">
              <strong>Hi, my name is <span>Roma</span></strong> <br /><em
              className="serif-normal"
            > <span> Designer</span></em>
              <span className="span__other__q"> and developer of things</span>
            </h1>
            <p className="header-other">A frontend developer. <span className="header-info__span">Let me show you...</span>
            </p>
            <div className="header-link">
              <a
                className="header-cvLink"
                href="#"
              >Download CV
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;