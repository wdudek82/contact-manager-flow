// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Consumer } from 'context';

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

const Pencil = styled(FAIAugmented).attrs({
  icon: 'pencil-alt',
})`
  float: right;
  color: #000;
  margin-right: 1rem;
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
  delete: (id: number, dispatch: (any) => void) => any,
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
      <Consumer>
        {(value = {}) => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <SortArrow
                  onClick={this.onShowClicked}
                  icon="sort-down"
                  show={this.state.showContactInfo}
                />
                {/* eslint-disable react/jsx-no-bind */}
                <Delete
                  onClick={this.props.delete.bind(this, id, dispatch)}
                />
                <Link to={`/contact/edit/${id}`}>
                  <Pencil />{' '}
                </Link>
                {/* eslint-enable react/jsx-no-bind */}
              </h4>
              <ListGroup show={this.state.showContactInfo}>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{phone}</li>
              </ListGroup>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
