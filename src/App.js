// @flow
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSortDown,
  faCaretRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from 'components/Contacts/Contacts';
import Header from 'components/Layout/Header';
import { Provider } from 'context';

library.add(faSortDown, faCaretRight, faTimes);

const App = () => {
  return (
    <Provider>
      <Router>
        <Header branding="Contact Manager" />
        <Contacts />
      </Router>
    </Provider>
  );
};

export default App;
