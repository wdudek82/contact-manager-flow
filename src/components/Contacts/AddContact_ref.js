// @flow
import * as React from 'react';
// import { Consumer } from 'context';

type Props = {
  name?: string,
  email?: string,
  phone?: string,
};

class AddContact extends React.Component<Props, {}> {
  static defaultProps = {
    name: 'Fred Smith',
    email: 'fred.smith@example.com',
    phone: '00 123 453 9353',
  };

  constructor(props: Props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };

    console.log(contact);
  };

  nameInput: ?HTMLInputElement;

  emailInput: ?HTMLInputElement;

  phoneInput: ?HTMLInputElement;

  render() {
    const { name, email, phone } = this.props;

    console.log('Props', name, email, phone);

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
                defaultValue={name}
                placeholder="name"
                className="form-control"
                ref={this.nameInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                placeholder="email"
                className="form-control"
                ref={this.emailInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                defaultValue={phone}
                placeholder="phone"
                className="form-control"
                ref={this.phoneInput}
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
