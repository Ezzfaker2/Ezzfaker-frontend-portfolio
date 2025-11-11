const CodePage = () => {
  return (

    <div className="code-page">
      <pre className="code-container">
        <code className="js">
            {
              `class RomanZaharchenko {
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
                      }`
        }
        </code>
      </pre>
    </div>
  );
};

export default CodePage;