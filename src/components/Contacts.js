import * as React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import { Consumer } from '../context';

// styles
const Wrapper = styled.div.attrs({
  className: 'container',
})``;

class Contacts extends React.Component<{}, {}> {
  handleDeleteContact = (contactId) => {
    const updatedContacts = this.state.contacts.filter(
      (contact) => contact.id !== contactId,
    );
    this.setState((prevState) => ({ contacts: updatedContacts }));
  };

  renderContacts({ contacts }) {
    return contacts.map((contact) => (
      <Contact
        key={contact.id}
        contact={contact}
        delete={this.handleDeleteContact}
      />
    ));
  }

  render() {
    return (
      <Wrapper>
        <Consumer>{(value) => this.renderContacts(value)}</Consumer>
      </Wrapper>
    );
  }
}

export default Contacts;
