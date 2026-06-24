// script.js

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. ELEMENT SELECTION ---
  const chatLog = document.getElementById("chat-log");
  const chatForm = document.getElementById("chat-form");
  const userInput = document.getElementById("user-input");

  // --- 2. EVENT LISTENER FOR FORM SUBMISSION ---
  chatForm.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();

    // Get user's message and remove leading/trailing whitespace
    const userMessageText = userInput.value.trim();

    // If the message is not empty, proceed
    if (userMessageText) {
      // Display the user's message in the chat log
      displayMessage(userMessageText, "user");

      // Clear the input field after sending the message
      userInput.value = "";

      // Simulate bot thinking and generate a response
      setTimeout(() => {
        const botResponse = getBotResponse(userMessageText);
        displayMessage(botResponse, "bot");
      }, 1000); // 1000ms = 1 second delay
    }
  });

  // --- 3. FUNCTION TO DISPLAY A MESSAGE IN THE LOG ---
  function displayMessage(message, sender) {
    // Create a new 'div' element for the message bubble
    const messageElement = document.createElement("div");

    // Add CSS classes for styling
    messageElement.classList.add("message", `${sender}-message`);

    // Set the text content of the message bubble
    messageElement.textContent = message;

    // Append the new message bubble to the chat log
    chatLog.appendChild(messageElement);

    // Auto-scroll to the bottom to see the latest message
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  // --- 4. FUNCTION TO GENERATE A BOT RESPONSE ---
  function getBotResponse(userText) {
    const lowerUserText = userText.toLowerCase();

    // Simple rule-based logic
    if (lowerUserText.includes("hello") || lowerUserText.includes("hi")) {
      return "Hello! How can I help you with web fundamentals today?";
    } else if (lowerUserText.includes("html")) {
      return "HTML stands for HyperText Markup Language. It is the standard for creating web pages.";
    } else if (lowerUserText.includes("css")) {
      return "CSS (Cascading Style Sheets) is used to style and lay out web pages — for example, to alter the font, color, size, and spacing of your content.";
    } else if (
      lowerUserText.includes("javascript") ||
      lowerUserText.includes("js")
    ) {
      return "JavaScript is a programming language that enables you to create dynamically updating content and control multimedia.";
    } else if (lowerUserText.includes("debug")) {
      return "Debugging is the process of finding and fixing errors in code. The browser's Developer Tools (F12) are essential for this!";
    } else if (lowerUserText.includes("bye")) {
      return "Goodbye! Keep coding!";
    } else {
      return "I'm not sure how to answer that. Try asking me about HTML, CSS, JavaScript, or debugging.";
    }
  }

  // Initial bot message on load
  setTimeout(() => {
    displayMessage(
      "Welcome, B.Tech student! I am your personal bot. Ask me a question to get started.",
      "bot"
    );
  }, 500);
});
