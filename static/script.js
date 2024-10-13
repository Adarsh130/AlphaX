document.getElementById('chat-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const promptInput = document.getElementById('prompt');
    const prompt = promptInput.value;
    const chatBox = document.getElementById('chat-box');
    
    // Add user's question to chat box
    appendMessage('user', prompt);

    // Clear the input field
    promptInput.value = '';

    // Scroll chat box to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Show "thinking..." message
    const thinkingMessage = appendMessage('ai', "Thinking...");

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        const data = await response.json();

        // Replace "thinking..." with the actual AI response
        thinkingMessage.textContent = data.response || "No response received.";
    } catch (error) {
        thinkingMessage.textContent = "An error occurred. Please try again.";
    }

    // Scroll chat box to the bottom after response
    chatBox.scrollTop = chatBox.scrollHeight;
});

// Helper function to append a message to the chat box
function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content', sender);
    messageContent.textContent = message;

    messageElement.appendChild(messageContent);
    chatBox.appendChild(messageElement);

    return messageContent;  // Return this to modify it later if needed
}
