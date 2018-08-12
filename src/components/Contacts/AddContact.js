// @flow
import * as React from 'react';
// import { Consumer } from 'context';

type State = {
  name: string,
  email: string,
  phone: string,
};

class AddContact extends React.Component<{}, State> {
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

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(this.state);

    // dispatch({
    //   type: 'ADD_CONTACT',
    // payload: {
    // }
    // })
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>

        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleInputChange}
                placeholder="name"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleInputChange}
                placeholder="email"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={this.handleInputChange}
                placeholder="phone"
                className="form-control"
              />
            </div>

            <input
              type="submit"
              value="Add Contact"
              className="btn btn-block btn-light"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
