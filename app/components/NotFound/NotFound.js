import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => (
  <div>
    <p>Diantre ! La page requestée n'est point disponible /o/ </p>
    <Link to="/"> Revenir vers la page d'accueil ? </Link>
  </div>
);

export default NotFound;
