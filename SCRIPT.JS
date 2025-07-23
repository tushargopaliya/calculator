// Select input box and all buttons
const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let currentInput = "";

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        switch (value) {
            case "AC":
                currentInput = "";
                input.value = "";
                break;

            case "DEL":
                currentInput = currentInput.slice(0, -1);
                input.value = currentInput;
                break;

            case "=":
                try {
                    // Replace \ with / for division
                    const expression = currentInput.replace(/\\/g, "/");
                    currentInput = eval(expression).toString();
                    input.value = currentInput;
                } catch {
                    input.value = "Error";
                    currentInput = "";
                }
                break;

            default:
                currentInput += value;
                input.value = currentInput;
        }
    });
});
