import * as React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addContact } from 'actions/contactActions';
import TextInputGroup from 'components/Layout/TextInputGroup';
import uuid from 'uuid';

type Props = {
  history: Object,
  addContact: (Object) => void,
};

type State = {
  name: string,
  email: string,
  phone: string,
  errors: Object,
};

class AddContact extends React.Component<Props, State> {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };

  handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const updatedValue = e.currentTarget.value;

    switch (e.currentTarget.name) {
      case 'name': {
        this.setState(() => ({ name: updatedValue }));
        break;
      }
      case 'email': {
        this.setState(() => ({ email: updatedValue }));
        break;
      }
      case 'phone': {
        this.setState(() => ({ phone: updatedValue }));
        break;
      }
      default:
        break;
    }
  };

  handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check for errors
    if (name === '') {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, name: 'Name is required' },
      }));
    }
    if (email === '') {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, email: 'Email is required' },
      }));
    }
    if (phone === '') {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, phone: 'Phone is required' },
      }));
    }

    if (name && email && phone) {
      const newContact = {
        id: uuid(),
        name,
        email,
        phone,
      };

      this.props.addContact(newContact);

      this.setState(() => ({ name: '', email: '', phone: '', errors: {} }));

      this.props.history.push('/');
    }
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">Add Contact</div>

          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <TextInputGroup
                name="name"
                value={name}
                placeholder="name"
                change={this.handleInputChange}
                error={errors.name}
              />
              <TextInputGroup
                name="email"
                value={email}
                placeholder="email"
                change={this.handleInputChange}
                error={errors.email}
              />
              <TextInputGroup
                name="phone"
                value={phone}
                placeholder="phone"
                change={this.handleInputChange}
                error={errors.phone}
              />
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-block btn-light"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addContact })(AddContact);
