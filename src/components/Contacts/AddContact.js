import * as React from 'react';
import { Consumer } from 'context';
import TextInputGroup from 'components/Layout/TextInputGroup';
import uuid from 'uuid';

type Props = {};

type State = {
  name: string,
  email: string,
  phone: string,
};

class AddContact extends React.Component<Props, State> {
  state = {
    name: '',
    email: '',
    phone: '',
  };

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

  handleSubmit = (dispatch, e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(arguments);

    const { name, email, phone } = this.state;

    if (name && email && phone) {
      const newContact = {
        id: uuid(),
        name,
        email,
        phone,
      };

      dispatch({ type: 'ADD_CONTACT', payload: newContact });

      this.setState(() => ({ name: '', email: '', phone: '' }));
    }
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {(value = {}) => {
          const { dispatch } = value;

          return (
            <div>
              <div className="card mb-3">
                <div className="card-header">Add Contact</div>

                <div className="card-body">
                  <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                    <TextInputGroup
                      name="name"
                      value={name}
                      placeholder="name"
                      change={this.handleInputChange}
                    />
                    <TextInputGroup
                      name="email"
                      value={email}
                      placeholder="email"
                      change={this.handleInputChange}
                    />
                    <TextInputGroup
                      name="phone"
                      value={phone}
                      placeholder="phone"
                      change={this.handleInputChange}
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
        }}
      </Consumer>
    );
  }
}

export default AddContact;
