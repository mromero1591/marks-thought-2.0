import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faHome, faBars, faLayerGroup, faInfoCircle, faAddressCard, faTimes, faFileAlt, faDatabase, faCode, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
//Custom Imports
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import routes from './routes.js';

library.add(faHome, faBars, faLayerGroup, faInfoCircle, faAddressCard, faTimes,faFileAlt,faDatabase, faCode, faEnvelope, fab);

function App() {
  return (
    <main className="main-wrapper">
      <Navbar />
      {routes}
    </main>
  );
}

export default App;
