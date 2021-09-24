let personInfo = {
  name: "JK",
  age: 27,
  greetings() {
    console.log("Hello from " + this.name);
  },
};

try {
  personInfo.gretings();
} catch (e) {
  console.log(e.message);
} finally {
  console.log("done");
}
