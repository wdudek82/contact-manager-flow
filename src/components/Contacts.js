import * as React from 'react';
import styled from 'styled-components';
import Contact from './Contact';

// styles
const Wrapper = styled.div.attrs({
  className: 'container',
})``;

class Contacts extends React.Component<{}, {}> {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Jaś Fasola',
        email: 'jfasola@example.com',
        phone: '555-555-5555',
      },
      {
        id: 2,
        name: 'Karen Smith',
        email: 'ksmith@example.com',
        phone: '123-345-5678',
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'hjohnson@gmail.com',
        phone: '877-636-1353',
      },
    ],
  };

  handleDeleteContact = (contactId) => {
    const updatedContacts = this.state.contacts.filter(
      (contact) => contact.id !== contactId,
    );
    this.setState((prevState) => ({ contacts: updatedContacts }));
  };

  renderContacts() {
    return this.state.contacts.map((contact) => (
      <Contact
        key={contact.id}
        contact={contact}
        delete={this.handleDeleteContact}
      />
    ));
  }

  render() {
    return <Wrapper>{this.renderContacts()}</Wrapper>;
  }
}

export default Contacts;
