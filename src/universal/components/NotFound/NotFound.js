import React, {Component} from 'react';
import styles from './NotFound.css';

export default class NotFound extends Component {
  render() {
    return (
      <div className={styles.error404}>
        <h1>Error 404</h1>
        <h3>Woops. Looks like this page doesn't exist.</h3>
      </div>
    );
  }
}
