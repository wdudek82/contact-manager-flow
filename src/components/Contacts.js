import * as React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import { Consumer } from '../context';

// styles
const Wrapper = styled.div.attrs({
  className: 'container',
})``;

class Contacts extends React.Component<{}, {}> {
  handleDeleteContact = (id, dispatch) => {
    dispatch({
      type: 'DELETE_CONTACT',
      payload: id,
    });
  }

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
