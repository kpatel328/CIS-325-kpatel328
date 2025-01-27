document.addEventListener("DOMContentLoaded", () => {
    // Select the input, button, and list elements
    const inputField = document.getElementById("userInput");
    const addButton = document.getElementById("addButton");
    const myList = document.getElementById("myList");

    // Function to add a new list item
    const addListItem = () => {
        // Get the text from the input field
        const inputText = inputField.value.trim();

        // Check if input is not empty
        if (inputText) {
            // Create a new <li> element
            const newListItem = document.createElement("li");
            // Set the text content of the <li>
            newListItem.textContent = inputText;

            // Append the <li> to the <ul>
            myList.appendChild(newListItem);

            // Clear the input field
            inputField.value = "";
        } else {
            alert("Please enter a valid text!");
        }
    };

    // Add event listener to the button
    addButton.addEventListener("click", addListItem);
});