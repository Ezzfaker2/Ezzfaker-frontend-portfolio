import {Navigation} from "../navigation/navigation.tsx";
import {Footer} from "../footer/footer.tsx";
import Header from "../header.tsx";
import MainInfo from "./main-info.tsx";

export function MainPage() {
  return (

    <>
      <Navigation />
      <Header />
      <MainInfo />
      <Footer />
    </>

  )
}