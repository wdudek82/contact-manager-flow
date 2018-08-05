// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const FAIAugmented = styled(FontAwesomeIcon)`
  cursor: 'pointer';
`;

const SortArrow = styled(FAIAugmented)``;

const Times = styled(FAIAugmented).attrs({
  icon: 'times',
})`
  float: right;
`;

const ListGroup = styled.ul.attrs({
  className: 'list-group',
})`
  display: ${(p) => (p.show ? 'initial' : 'none')};
`;

type Props = {
  contact: Object,
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
    const { name, email, phone } = this.props.contact;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <SortArrow
            onClick={this.onShowClicked}
            icon={this.state.showContactInfo ? 'sort-down' : 'caret-right'}
          />
          <Times onClick={() => console.log('delete')} />
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
