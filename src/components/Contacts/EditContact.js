import * as React from 'react';
import axios from 'axios';
import { Consumer } from 'context';
import TextInputGroup from 'components/Layout/TextInputGroup';
import Contact from './Contact';

type Props = {
  history: Object,
  match: Object,
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

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    const contact = res.data;

    this.setState(() => ({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    }));
  }

  handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.name);
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

  handleSubmit = async (dispatch, e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, phone } = this.state;
    const { id } = this.props.match.params;

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

    const updateContact = {
      name,
      email,
      phone,
    };

    if (name && email && phone) {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        updateContact,
      );
      dispatch({ type: 'UPDATE_CONTACT', payload: res.data });
      this.setState(() => ({ name: '', email: '', phone: '', errors: {} }));
      this.props.history.push('/');
    }
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value = {}) => {
          const { dispatch } = value;

          return (
            <div>
              <div className="card mb-3">
                <div className="card-header">Edit Contact</div>

                <div className="card-body">
                  <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
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
        }}
      </Consumer>
    );
  }
}

export default EditContact;
