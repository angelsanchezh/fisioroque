import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider} from '@auth0/auth0-react';
import Rutas from './Routes/Rutas';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>

  
  <Auth0Provider
   domain='dev-tfz2o9u8.us.auth0.com'
   clientId='fZsH3pGqaDERPOPL2QAmqJwoxfF4oWEE' 
   redirectUri={window.location.origin} 
  >
  <Rutas/>

   </Auth0Provider>
   
 
   </React.StrictMode>

);


