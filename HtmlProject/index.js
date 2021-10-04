function render(tag, text, func) {
  console.log(func);
  if (func == undefined) {
    const k = document.createElement(tag);
    const content = document.createTextNode(text);
    k.appendChild(content);
    const body = document.getElementById("root");
    document.body.insertBefore(k, body);
  }
}

render("h1", "hello");
render("h1", "there");
render("h1", "world");
