import {Navigation} from "../navigation/navigation.tsx";
import {Footer} from "../footer/footer.tsx";
import CodePage from "../codePage/codePage.tsx";


export function Skills() {

  return (

      <div className="content-container">
        <Navigation />
        <div className="Skills__container">
          <h1>Skills</h1>
          <h2>Frontend</h2>
          <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn,
            TailwindCSS, StyledComponents
          </p>
          <h2>Backend</h2>
          <h2>Other</h2>
          <p>Info</p>
        </div>
        <CodePage/>
      <Footer />
   </div>
  )
}