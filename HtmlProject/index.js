function render(tag, text, func = null) {
  const createTag = document.createElement(tag);
  createTag.appendChild(document.createTextNode(text));
  if (func === null) {
    return createTag;
  } else {
    createTag.appendChild(func);
    return createTag;
  }
}

let root = document.getElementById("root");
root.appendChild(render("p", "hello ", render("b", "there")));
root.appendChild(render("input", "name"));
