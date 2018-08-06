// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const FAIAugmented = styled(FontAwesomeIcon)`
  cursor: 'pointer';
`;

const SortArrow = styled(FAIAugmented)`
  transform: ${(p) => (p.show ? 'rotate(0deg)' : 'rotate(-90deg)')};
  transition: transform 300ms;
`;

const Delete = styled(FAIAugmented).attrs({
  icon: 'times',
})`
  float: right;
  color: #f00;
`;

const ListGroup = styled.ul.attrs({
  className: 'list-group',
})`
  height: ${(p) => (p.show ? '99px' : '0px')};
  opacity: ${(p) => (p.show ? 1 : 0)};
  transition: all 300ms;
  }
`;

type Props = {
  contact: {
    id: number,
    name: string,
    email: string,
    phone: string,
  },
  delete: (id: number) => void,
};

type State = {
  showContactInfo: boolean,
};

class Contact extends React.Component<Props, State> {
  state = {
    showContactInfo: false,
  };

  onShowClicked = (e: Event) => {
    e.preventDefault();
    this.setState((prevState) => ({
      showContactInfo: !prevState.showContactInfo,
    }));
  };

  render() {
    const { id, name, email, phone } = this.props.contact;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <SortArrow
            onClick={this.onShowClicked}
            /* icon={this.state.showContactInfo ? 'sort-down' : 'caret-right'} */
            icon="sort-down"
            show={this.state.showContactInfo}
          />
          <Delete onClick={() => this.props.delete(id)} />
        </h4>
        <ListGroup show={this.state.showContactInfo}>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">{phone}</li>
        </ListGroup>
      </div>
    );
  }
}

export default Contact;
