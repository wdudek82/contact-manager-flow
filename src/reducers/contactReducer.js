import {
  GET_CONTACTS,
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
} from 'actions/types';

const initialState = {
  contacts: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      phone: '555-555-5555',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@gmail.com',
      phone: '555-555-5555',
    },
    {
      id: 3,
      name: 'Tom Doe',
      email: 'tom@gmail.com',
      phone: '555-555-5555',
    },
  ],
};

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return state;
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts,
          action.payload,
        ],
      };
    case DELETE_CONTACT: {
      const updatedContacts = state.contacts.filter((contact) => (
        contact.id !== action.payload
      ));

      return {
        ...state,
        contacts: updatedContacts,
      };
    }
    default:
      return state;
  }
}

export default contactReducer;
