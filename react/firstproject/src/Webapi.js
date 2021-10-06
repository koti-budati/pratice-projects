import React from "react";
import "./Webapi.css";

class Webapi extends React.Component {
  state = {
    loading: true,
    product: null,
  };

  async componentDidMount() {
    const uri = "https://fakestoreapi.com/products";
    await fetch(uri)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Error with url");
        }
      })
      .then((data) => {
        console.log(this);
        this.setState({
          product: data,
          loading: false,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.product ? (
          <div id="loading">loading</div>
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  <th>title</th>
                  <th>price </th>
                </tr>
              </thead>
              <tbody>
                {this.state.product.map((element) => (
                  <tr key={element.id}>
                    <td>{element.title}</td>
                    <td>{element.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Webapi;
