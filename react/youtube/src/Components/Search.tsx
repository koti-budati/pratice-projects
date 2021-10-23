import React from "react";
import styles from "../Styles/Search.module.css";

type state = {
  search: string;
};
class Search extends React.Component<{ searchCallBack: Function }> {
  state: state = {
    search: "",
  };
  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      search: e.currentTarget.value,
    });
  };

  handleRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (this.state.search.length !== 0) {
      this.state.search.replaceAll(" ", "_");
      this.props.searchCallBack(this.state.search);
    }
  };
  render() {
    return (
      <div>
        <form id={styles.form}>
          <input
            name="search"
            placeholder="search"
            type="text"
            onChange={this.handleSearch}
          />
          <button type="submit" onClick={this.handleRequest}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
