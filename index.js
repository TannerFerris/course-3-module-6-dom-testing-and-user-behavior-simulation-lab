// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

document.getElementById("button").addEventListener('click', addToDisplay(userInput));
const userInput = document.getElementById("user-input");

function addToDisplay(userInput){
    const display = document.getElementById("dynamic-content");

    const displayText = document.createElement("h1");

    displayText.textContent = userInput.textContent;

    display.append(displayText);
}

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
