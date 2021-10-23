function chat() {
  // geting input elements
  const chatText = document.getElementById("text");
  const chatArea = document.getElementById("chatArea");

  if ((<HTMLInputElement>chatText).value.trim() == "") {
    return 1;
  } else {
    // getting and add to existing chart
    let text = document.createElement("li");
    text.id = "received";
    text.innerText = (<HTMLInputElement>chatText).value.trim();
    chatArea.appendChild(text);
    // scroll to latest chat

    chatArea.scrollTop = chatArea.scrollHeight;
    chatText.focus();

    return 0;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("button").addEventListener("click", chat);
  document.getElementById("text").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      chat();
    }
  });
});
