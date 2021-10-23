function chat() {
    // geting input elements
    var chatText = document.getElementById("text");
    var chatArea = document.getElementById("chatArea");
    if (chatText.value.trim() == "") {
        return 1;
    }
    else {
        // getting and add to existing chart
        var text = document.createElement("li");
        text.id = "received";
        text.innerText = chatText.value.trim();
        chatArea.appendChild(text);
        // scroll to latest chat
        chatArea.scrollTop = chatArea.scrollHeight;
        chatText.focus();
        return 0;
    }
}
window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button").addEventListener("click", chat);
    document.getElementById("text").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            chat();
        }
    });
});
