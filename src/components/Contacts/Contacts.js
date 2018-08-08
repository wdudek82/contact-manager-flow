// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Consumer } from 'context';
import Contact from './Contact';

// styles
const Wrapper = styled.div.attrs({
  className: 'container',
})``;

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
      <Wrapper>
        <Consumer>{(value = {}) => this.renderContacts(value)}</Consumer>
      </Wrapper>
    );
  }
}

export default Contacts;
