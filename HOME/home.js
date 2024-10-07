function openChat() {
    const chatWidget = document.getElementById("chat-widget");
    chatWidget.style.display = chatWidget.style.display === "none" ? "block" : "none";
}

function sendMessage() {
    const chatLog = document.getElementById("chat-log");
    const chatArea = document.getElementById("chat-area");
    const message = chatArea.value.trim();

    if (message) {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
        chatArea.value = ""; // Clear the input
    }
}
