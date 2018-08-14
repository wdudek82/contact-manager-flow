// @flow
import * as React from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload,
        ),
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'UPDATE_CONTACT': {
      const updatedContacts = state.contacts.map((contact) => (
        contact.id === action.payload.id ? action.payload : contact
      ));

      return {
        ...state,
        contacts: updatedContacts,
      };
    }
    default:
      return state;
  }
};

type Props = {
  children?: React.Node,
};

type State = {
  contacts: Array<{ id: number, name: string, email: string, phone: string }>,
  dispatch: ({ type: string, payload: any }) => void,
};

const Context = React.createContext();

export class Provider extends React.Component<Props, State> {
  static defaultProps = {
    children: {},
  };

  /* eslint-disable react/no-unused-state */
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
    dispatch: (action: { type: string, payload: any }) => {
      this.setState((state) => reducer(state, action));
    },
  };
  /* eslint-enable-block react/no-unused-state */

  // First version
  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
  //     this.setState(() => ({ contacts: response.data }));
  //   });
  // }

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    console.log(res.data);

    this.setState({ contacts: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const { Consumer } = Context;
