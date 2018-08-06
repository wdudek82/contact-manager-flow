// @flow
import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSortDown, faCaretRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/Contacts';
import Header from './components/Header';
import { Provider } from './context';

library.add(faSortDown, faCaretRight, faTimes);

const App = () => {
  return (
    <Provider>
      <Header branding="Contact Manager" />
      <Contacts />
    </Provider>
  );
};

export default App;
