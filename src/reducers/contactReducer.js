import {
  GET_CONTACTS,
  GET_CONTACT,
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
  contact: {},
};

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: [
          ...action.payload,
        ],
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts,
          action.payload,
        ],
      };
    case EDIT_CONTACT: {
      const updatedContacts = state.contacts.map((contact) => (
        contact.id === action.payload.id ? action.payload : contact
      ));

      return {
        ...state,
        contacts: updatedContacts,
      };
    }
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
