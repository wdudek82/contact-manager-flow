import * as React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getContact, editContact } from 'actions/contactActions';
import TextInputGroup from 'components/Layout/TextInputGroup';

type Props = {
  contact: Object,
  history: Object,
  match: Object,
  getContact: Function,
  editContact: Function,
};

type State = {
  name: string,
  email: string,
  phone: string,
  errors: Object,
};

class EditContact extends React.Component<Props, State> {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.getContact(id);

    const { contact } = this.props;

    this.setState(() => ({
      id: contact.id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    }));
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { id, name, email, phone } = nextProps.contact;
    this.setState(() => ({
      id,
      name,
      email,
      phone,
    }));
  }

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
      this.props.editContact(this.state);

      this.setState(() => ({ name: '', email: '', phone: '', errors: {} }));
      this.props.history.push('/');
    }
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">Edit Contact</div>

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
                value="Update Contact"
                className="btn btn-block btn-light"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contact.contact,
  };
}

export default connect(
  mapStateToProps,
  { getContact, editContact },
)(EditContact);
