import React from "react";
import HandleData from "../Components/HandleData";
import Request from "../Components/Request";
import { serverDataType, defaultYoutubeData } from "../Type";

type state = {
  youtubeData: fetchDataType;
};

type fetchDataType = serverDataType[];

class Main extends React.Component {
  state: state = {
    youtubeData: defaultYoutubeData,
  };

  handleData = (data: fetchDataType) => {
    this.setState({ youtubeData: data });
    console.log(this.state.youtubeData);
  };

  render() {
    return (
      <div>
        <Request queryData={this.handleData} />
        {this.state.youtubeData.length > 1 ? (
          <HandleData serverData={this.state.youtubeData} />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Main;
