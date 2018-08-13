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
import AddContact from 'components/Contacts/AddContact';
import Header from 'components/Layout/Header';
import About from 'components/Pages/About';
import { Provider } from 'context';

library.add(faSortDown, faCaretRight, faTimes);

const App = () => {
  return (
    <Provider>
      <Router>
        <div>
          <Header branding="Contact Manager" />
          <Router>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route path="/about" component={About} />
                <Route path="/contact/add" component={AddContact} />
              </Switch>
            </div>
          </Router>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
