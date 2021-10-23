import React from "react";
import { serverDataType as Iprops } from "../Type";
import styles from "../Styles/Card.module.css";

class Card extends React.Component<{ data: Iprops; iFrame: Function }> {
  handleIFrame = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.props.iFrame(this.props.data.videoId);
  };
  render() {
    return (
      <div
        id={this.props.data.videoId}
        onClick={this.handleIFrame}
        className={styles.card}
      >
        <div>
          <img
            src={this.props.data.thumbnails}
            alt={this.props.data.description}
          />
        </div>
        <div>
          <h1>{this.props.data.title}</h1>
          <div>
            <h5>Channel Name: {this.props.data.channelTitle}</h5>
            <p>{this.props.data.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
