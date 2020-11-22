import React, { Component } from "react";
import styles from './SearchBox.module.css';

export default class SearchBox extends Component {
  state = {
    value: "",
  };
  handlerChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handlerSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };
  render() {
    return (
      <form className={styles.form} onSubmit={this.handlerSubmit}>
        <input
        className={styles.input}
          type="text"
          value={this.state.value}
          onChange={this.handlerChange}
          placeholder='Enter movie'
        />
        <button className={styles.button} type="submit">Search</button>
      </form>
    );
  }
}
