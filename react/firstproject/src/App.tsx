import React from "react";

type state = {
  count: number;
  username: string;
};

class App extends React.Component {
  state: state = {
    count: 0,
    username: "",
  };

  formValidation = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    console.log(e);
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
    console.log(e.currentTarget.value);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" name="username" onChange={this.handleChange} />
          <input
            type="submit"
            name="submit"
            value="submit"
            onClick={this.formValidation}
          />
        </form>
      </div>
    );
  }
}

export default App;
