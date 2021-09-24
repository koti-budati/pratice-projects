function tag(tagName = "div", text = "", className, id, style = null) {
  this.text = text;
  this.class = className;
  this.id = id;
  this.style = style;
  this.tagName = tagName;
}

var l = new tag("div", "hello", "default", "", {
  color: "blue",
  backgroundColor: "black",
});

pattern = /[A-Z]+/;
