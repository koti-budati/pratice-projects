import React from "react";

type fetchRes = {
  id: string;
  artistList: [];
  webLink: string;
  image: string;
  albumType: string;
}[];

type state = {
  fetchData: fetchRes;
};

class ApiCall extends React.Component {
  state: state = {
    fetchData: [],
  };
  handleSpotifyFetch = () => {
    fetch("http://127.0.0.1:5000/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw "response Error";
        }
      })
      .then((data: fetchRes) => {
        this.setState({ fetchData: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleRenderData = (data: fetchRes) => {
    return data.map((item) => {
      return (
        <div key={item.id}>
          <li>{item.albumType}</li>
          <li>{item.webLink}</li>
          <li>
            <img src={item.image} alt={item.albumType} />
          </li>
        </div>
      );
    });
  };
  componentDidMount() {
    this.handleSpotifyFetch();
  }
  render() {
    return (
      <div>
        {this.state.fetchData.length > 1 ? (
          this.handleRenderData(this.state.fetchData)
        ) : (
          <h1>loading</h1>
        )}
      </div>
    );
  }
}

export default ApiCall;
