// @flow
import * as React from 'react';
import { Consumer } from 'context';
import Contact from './Contact';

type Props = {};

class Contacts extends React.Component<Props, {}> {
  handleDeleteContact = (id: number, dispatch: (any) => void) => {
    dispatch({
      type: 'DELETE_CONTACT',
      payload: id,
    });
  };

  renderContacts({ contacts }: Object) {
    return contacts.map((contact) => (
      <Contact
        key={contact.id}
        contact={contact}
        delete={(id: number, dispatch: (any) => void) =>
          this.handleDeleteContact(id, dispatch)
        }
      />
    ));
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        <Consumer>{(value = {}) => this.renderContacts(value)}</Consumer>
      </React.Fragment>
    );
  }
}

export default Contacts;
