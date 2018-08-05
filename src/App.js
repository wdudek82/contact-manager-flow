// @flow
import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/Contacts';
import Header from './components/Header';

library.add(faSortDown);

const App = () => {
  return (
    <div>
      <Header branding="Contact Manager" />
      <Contacts />
    </div>
  );
};

export default App;
