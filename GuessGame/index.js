const start_game = document.getElementById("start-game");

const func = (event) => {
  alert("click");
  if (event.error) {
    alert(event.error);
  }
};

start_game.addEventListener("click", func);
