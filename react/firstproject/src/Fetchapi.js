import { useEffect } from "react";
import { useState } from "react";

const Fetchapi = () => {
  const [apiDate, getData] = useState(null);

  useEffect(() => {
    const uri = "https://fakestoreapi.com/products";
    fetch(uri)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("error from api");
        }
      })
      .then((data) => {
        const newProductArray = data.map((element) => element.title);
        getData(newProductArray);
      });
  }, []);

  return (
    <div>
      {!apiDate ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : (
        <div>{apiDate}</div>
      )}
    </div>
  );
};

export default Fetchapi;
