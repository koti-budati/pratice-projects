import React from "react";
import { serverDataType } from "../Type";
import Card from "./Card";

type state = {
  click: boolean;
  frameId: string;
};

class HandleData extends React.Component<{ serverData: serverDataType[] }> {
  state: state = {
    click: false,
    frameId: "",
  };

  renderFrame = (videoId: string) => {
    this.setState({
      click: true,
      frameId: videoId,
    });
  };

  handleServerData = () => {
    return this.props.serverData.map((element) => {
      if (element.videoId === this.state.frameId) {
        return <span></span>;
      }
      return (
        <Card data={element} key={element.videoId} iFrame={this.renderFrame} />
      );
    });
  };
  render() {
    return (
      <div>
        {this.state.click ? (
          <iframe
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/" + this.state.frameId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <span></span>
        )}
        {this.handleServerData()}
      </div>
    );
  }
}

export default HandleData;
