// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getContacts, deleteContact } from 'actions/contactActions';
import Contact from './Contact';

type Props = {
  contacts: Array<Object>,
  getContacts: (void) => void,
  deleteContact: (number) => void,
};

class Contacts extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.getContacts();
  }

  handleDeleteContact = async (id: number) => {
    // await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    this.props.deleteContact(id);
  };

  renderContacts(contacts: Array<Object>) {
    return contacts.map((contact) => (
      <Contact
        key={contact.id}
        contact={contact}
        delete={() => this.handleDeleteContact(contact.id)}
      />
    ));
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {this.renderContacts(this.props.contacts)}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contact.contacts,
  };
}

export default connect(mapStateToProps, { getContacts, deleteContact })(Contacts);
