let getData = fetch("https://fakestoreapi.com/products")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("Error Fetching Data");
    }
  })
  .then((data) => {
    let k = "";
    for (let i of data) {
      k += `<tr><td> ${i.title}</td><td>${i.price}</td></tr>`;
    }
    console.log(k);
    document.querySelector("#fetchData").innerHTML = k;
  })
  .catch((error) => {
    console.log(error);
  });
