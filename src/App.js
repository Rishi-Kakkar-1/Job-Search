import "./styles.css";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let company = this.company.value;
    this.inputed.textContent = company;
    fetch("./database.txt").then(function (response) {
      response.text().then(function (text) {
        document.getElementById("textfile").textContent = text;
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Job Search</h1>
        <h3>Search the company you want jobs for</h3>
        <form>
          <label>
            Company:&nbsp;
            <input type="text" ref={(c) => (this.company = c)} name="company" />
          </label>
          <input type="submit" onClick={this.onSubmit} value="Submit" />
        </form>
        <p ref={(c) => (this.inputed = c)} name="inputed" />
        <p ref={(c) => (this.textfile = c)} id="textfile" />
      </div>
    );
  }
}
