// @flow
import axios from 'axios';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  EDIT_CONTACT,
} from './types';

type Contact = {
  id: number,
  name: string,
  email: string,
  phone: string,
};

export const getContacts = () => async (dispatch: Function) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');

  dispatch({
    type: GET_CONTACTS,
    payload: res.data,
  });
};

export const getContact = (id: number) => async (dispatch: Function) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  dispatch({
    type: GET_CONTACT,
    payload: res.data,
  });
};

export const addContact = (newContact: Contact) => async (
  dispatch: Function,
) => {
  const res = await axios.post(
    'https://jsonplaceholder.typicode.com/users',
    newContact,
  );

  dispatch({
    type: ADD_CONTACT,
    payload: res.data,
  });
};

export const deleteContact = (id: number) => async (dispatch: Function) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

  dispatch({
    type: DELETE_CONTACT,
    payload: id,
  });
};

export const editContact = (updatedContact: Contact) => async (
  dispatch: Function,
) => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${updatedContact.id}`,
    updatedContact,
  );

  dispatch({
    type: EDIT_CONTACT,
    payload: res.data,
  });
};
