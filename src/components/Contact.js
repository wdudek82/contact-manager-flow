// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

// styles
const Anchor = styled.a`
  text-decoration: none;
  color: #000;

  > i {
    color: #ffffff;
  }
`;

type Props = {
  contact: Object,
}

class Contact extends React.Component<Props, {}> {
  onShowClicked = (e: Event) => {
    e.preventDefault();
    console.log(e.target);
  }

  render() {
    const { name, email, phone } = this.props.contact;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <Anchor href="/" onClick={this.onShowClicked}>
            <FontAwesomeIcon icon="sort-down" />
          </Anchor>
        </h4>
        <ul className="list-group">
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">{phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
