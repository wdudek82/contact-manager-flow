import React, { Component } from 'react';

export default class Test extends Component {
  state = {
    test: 'test',
    body: '',
  };

  componentDidMount() {
    console.log('componentDidMount');

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        this.setState(() => ({
          title: data.title,
          body: data.body,
        }));
      });
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps');
  }

  componentDidUpdate() {
    console.log('component');
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps');

    return { test: 'something' }; // must return null or state, but can't use setState
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');

    return { test: 'something' }; // must return null or state, but can't use setState
  }

  /* eslint-disable camelcase */
  UNSAFE_componentWillUpdate() {
    console.log('component');
  }

  UNSAFE_componentWillMount() {
    console.log('component');
  }
  /* eslint-enable camelcase */

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h1>Test Component</h1>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}
