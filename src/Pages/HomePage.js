import { useAuth0 } from '@auth0/auth0-react';
import Cover from '../Components/cover/Cover';
import Navbaruno from '../Components/Navbaruno/Navbaruno';
import Nosotros from '../Components/Nosotros/Nosotros'
import Ofrecemos from '../Components/Slider/Ofrecemos';
import Footer from '../Components/Footer/Footer';
import { LogoutButton } from '../Components/Botonauth/Logout';
import { Profile } from '../Components/Botonauth/Profile';
import Contact from '../Components/Correo/Contact';
import Personal from '../Components/Personal/Personal';
import { useState, useEffect } from 'react';
import Ubicanos from '../Components/Ubicanos/Ubicanos';
import Testimonios from '../Components/Testimonios/testimonios';

function HomePage() {

  const { isAuthenticated } = useAuth0();

  const [navbar, setNavbar] = useState()

  function logit() {
    let scrollPos = document.documentElement.scrollTop

    if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active')
    else navbar.classList.remove('bg-active')
  }

  useEffect(() => {
    setNavbar(document.querySelector('#navbar'));
    window.addEventListener("scroll", logit);

    return () => {
      window.removeEventListener('scroll', logit);
    }
  })

  return (


    <div className="HomePage">
      {isAuthenticated ? (
        <>
          <LogoutButton />
          <Profile />
        </>
      ) :
        (<Navbaruno />)}

      <Cover />
      <Nosotros />
      <Ofrecemos />
      <Personal />
      <Contact />
      <Testimonios/>
      <Ubicanos/>
      <Footer />
    </div>

  );
}

export default HomePage;
