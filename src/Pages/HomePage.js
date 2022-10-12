import { useAuth0 } from '@auth0/auth0-react';
import Cover from '../Components/cover/Cover';
import Navbaruno from '../Components/Navbaruno/Navbaruno';
import Nosotros from '../Components/Nosotros/Nosotros'
import Ofrecemos from '../Components/Slider/Ofrecemos';
import Info from '../Components/Info/Info';
import Footer from '../Components/Footer/Footer';
import { LogoutButton } from '../Components/Botonauth/Logout';
import { Profile } from '../Components/Botonauth/Profile';
import Contact from '../Components/Correo/Contact';
import Slider from '../Components/Sliderdos/Slider';
import Personal from '../Components/Personal/Personal';

function HomePage() {

  const { isAuthenticated } = useAuth0();

  return (
    

    <div className="HomePage">
     {isAuthenticated ? (
          <>
           <LogoutButton/>
           <Profile/>
           </>
          ) :
           ( <Navbaruno/>)}
    
       <Cover />
      <Nosotros/>
      <Ofrecemos />
      <Personal/>
      <Contact/>
      <Slider/>
      <Info />
      
      <Footer />
    </div>
    
  );
}

export default HomePage;
