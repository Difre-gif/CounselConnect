// JS for handling chat functionality
document.getElementById('send-btn').addEventListener('click', sendMessage);

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value;

    if (messageText.trim() !== '') {
        // Create new message div
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'student');
        messageDiv.innerText = messageText;

        // Append the new message to the chat box
        const chatBox = document.getElementById('chat-box');
        chatBox.appendChild(messageDiv);

        // Clear the input
        messageInput.value = '';

        // Scroll to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;

        // Simulate a teacher response after 1 second (for demo)
        setTimeout(function () {
            const teacherMessage = document.createElement('div');
            teacherMessage.classList.add('message', 'teacher');
            teacherMessage.innerText = "Hey, how are you";
            chatBox.appendChild(teacherMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }
}
