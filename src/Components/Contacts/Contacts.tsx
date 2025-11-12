import {Footer} from "../footer/footer.tsx";
import {Navigation} from "../navigation/navigation.tsx";

export function Contacts() {

  return (
    <>
      <Navigation/>
      <div className="content-container">
        <main className="contact-wrapper">
          <h1>Contacts</h1>
          <h2>Telegram / WhatsApp</h2>
          <p>+375447287415 - Belarus number</p>
          <p>+79163815595 - Russian number</p>
          <h2>Email</h2>
          <p>ezzproggers@gmail.com</p>
          <h2>Location</h2>
          <p>Belarus, Gomel</p>
        </main>
      </div>
      <Footer/>
    </>
  )
}