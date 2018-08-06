// @flow
import * as React from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

type Props = {
  children: React.Node,
};

type State = {
  contacts: Array<{ id: number, name: string, email: string, phone: string }>,
    dispatch: ({ type: string, payload: number}) => void,
};

const Context = React.createContext();

export class Provider extends React.Component<Props, State> {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Jaś Fasola',
        email: 'jfasola@example.com',
        phone: '555-555-5555',
      },
      {
        id: 2,
        name: 'Karen Smith',
        email: 'ksmith@example.com',
        phone: '123-345-5678',
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'hjohnson@gmail.com',
        phone: '877-636-1353',
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const { Consumer } = Context;
