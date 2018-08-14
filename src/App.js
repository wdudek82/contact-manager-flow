// @flow
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSortDown,
  faCaretRight,
  faTimes,
  faPencilAlt,
  faHome,
  faPlus,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from 'components/Contacts/Contacts';
import AddContact from 'components/Contacts/AddContact';
import EditContact from 'components/Contacts/EditContact';
import Header from 'components/Layout/Header';
import About from 'components/Pages/About';
import NotFound from 'components/Pages/NotFound';
import Test from 'components/test/Test';
import { Provider } from 'context';

library.add(
  faSortDown,
  faCaretRight,
  faTimes,
  faPencilAlt,
  faHome,
  faPlus,
  faQuestion,
);

const App = () => {
  return (
    <Provider>
      <Router>
        <div>
          <Router>
            <div>
              <Header branding="Contact Manager" />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route path="/about" component={About} />
                  <Route path="/contact/add" component={AddContact} />
                  <Route path="/contact/edit/:id" component={EditContact} />
                  <Route path="/test" component={Test} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
