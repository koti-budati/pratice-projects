import React from "react";
import Search from "./Search";

class Request extends React.Component<{ queryData: Function }> {
  state = {
    loading: false,
  };
  dataRequest = (search: string) => {
    this.setState({
      loading: true,
    });
    search = search.replaceAll(" ", "_");
    fetch(`http://127.0.0.1:5000/youtube/search=${search}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Response is not valid");
        }
      })
      .then((data) => {
        this.setState({
          loading: false,
        });
        this.props.queryData(data);
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
        console.log(error);
        console.log("error requesting Data");
      });
  };
  componentDidMount() {
    this.dataRequest("freecodecamp react");
  }

  render() {
    return (
      <div>
        <Search searchCallBack={this.dataRequest} />
        {this.state.loading ? <h1>loading...</h1> : <span></span>}
      </div>
    );
  }
}

export default Request;
