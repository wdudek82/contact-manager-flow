// @flow
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
} from './types';

type Contact = {
  name: string,
  email: string,
  phone: string,
};

export function getContacts() {
  return {
    type: GET_CONTACTS,
  };
}

export function addContact(newContact: Contact) {
  return {
    type: ADD_CONTACT,
    payload: newContact,
  };
}

export function deleteContact(id: number) {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
}

export function editContact(id: number, updatedContact: Contact) {
  return {
    type: EDIT_CONTACT,
    payload: updatedContact,
  };
}
