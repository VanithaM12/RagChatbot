document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    appendMessage(userInput, "user-message");

    const botResponse = getBotResponse(userInput);
    appendMessage(botResponse, "bot-message");

    document.getElementById("user-input").value = "";
}

function appendMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", className);
    messageElement.textContent = message;
    document.getElementById("chat-box").appendChild(messageElement);
    messageElement.scrollIntoView();
}

function getBotResponse(userInput) {
    // Simple rule-based responses
    const responses = {
        "hello": "Hi there! How can I help you today?",
        "how are you": "I'm just a bot, but I'm here to help!",
        "what is your name": "I'm a chatbot created to assist you.",
        "bye": "Goodbye! Have a great day!"
    }

    // Convert input to lowercase to make the match case-insensitive
    const input = userInput.toLowerCase();

    // Return a response if found, otherwise a default message
    return responses[input] || "I'm sorry, I don't understand that.";
}