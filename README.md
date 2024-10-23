# **OTP Input Component**

A lightweight, reusable OTP (One-Time Password) input component designed to enhance user experience in applications requiring secure authentication. This component generates a customizable container with individual input fields, allowing users to enter a multi-digit OTP efficiently.
<div align=""center>
<img src="./assets/preview.gif" alt="OTP preview" style="display: block; margin: 50px auto;">
</div>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits & Contact](#credits--contact)

## Features

- **Customizable Input Count: Easily specify the number of OTP input fields.**
- **Single-Digit Input: Each field accepts only a single digit, ensuring input accuracy.**
- **Mobile-Friendly Design: Utilizes the `tel` input type for a seamless numeric input experience on mobile devices.**
- **Easy Integration: Returns a DOM element that can be easily appended to any part of your web application.**
- **Cross-Browser Compatibility: Works on all modern browsers.**

## Installation

### To integrate the button component into your project, follow these steps:

1. **Download the Files**: Clone or download the repository to your local machine.\*\*
2. **Serve the `index.html` File**: To view the component in action, you’ll need to run a local server. Here are a few options:

   - **Using Live Server**: If you're using Visual Studio Code, you can install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). Simply open the `index.html` file and click on "Open with Live Server."

   - **Using XAMPP**: Download and install [XAMPP](https://www.apachefriends.org/index.html). Move the project folder to the `htdocs` directory, then start the Apache server from the XAMPP Control Panel. Access the slider via `http://localhost/your-folder-name/index.html`.

   - **Using Python**: If you have Python installed, navigate to your project directory in the terminal or command prompt and run:
     ```bash
     python -m http.server
     ```
     This will start a simple HTTP server, which you can access at `http://localhost:8000/index.html`.

## Usage

### OTP Configuration Parameters:

- **Input count**: Number of generated input fields.

### Example Use Case:

Here’s an example of how you can integrate the OTP component into your project:

1. **Import the OTP component** in a javascript file.

```javascript
import { OTP } from "./OTP/otp.js";
```

2. Call the OTP component to create and append a OTP verification

```javascript
// Variables for OTP Configuration
const inputCount = 6; // you can change it as you like

// Create OTP
const codeVerification = OTP(inputCount);

// Append OTP to the DOM
document.body.appendChild(codeVerification);
```

3. Manage OTP inputs:

```javascript
// Select the all OTP inputs
const inputs = document.querySelectorAll(".OTP_Feild");

// Manage OTP inputs
inputs.forEach((input, index) => {
  // Set index for inputs
  input.dataset.index = index;

  // Keyup Listener
  input.addEventListener("keyup", ManageEnteredCode);
});
```

4. Manage Entered Code

```javascript
// Manage Entered Code
function ManageEnteredCode(e) {
  // Identify the target input field
  let input = e.target;

  // Retrieve and adjust input value
  let value = input.value;
  input.value = "";
  input.value = value ? value[0] : "";

  // Set index for feilds
  let feildIndex = input.dataset.index;

  // Move to next Feild
  if (value.length > 0 && feildIndex < inputs.length - 1) {
    input.nextElementSibling.focus();
  }

  // Handel Remove
  if (e.key === "Backspace" && feildIndex > 0) {
    input.previousElementSibling.focus();
  }

  // Submit OTP
  if (
    feildIndex == inputs.length - 1 &&
    value.length > 0 &&
    e.key !== "Backspace"
  ) {
    otpSubmit();
  }
}
```

5. OTP Submit

```javascript
// Boolean
let IsValid = false;

// OTP Submit
function otpSubmit() {
  //
  // Clear Inputs Classes
  inputs.forEach((input) => {
    input.blur(); // Remove fucos of inputs
    input.classList.remove("check"); // Clear check OTP Inputs Class
    input.classList.remove("error"); // Clear error OTP Inputs Class
  });

  // Add Loading to otp container
  CodeVerifiaction.classList.add("loading");

  // Gather Entered Code
  let otp = "";
  inputs.forEach((inputValue) => {
    otp += inputValue.value;
  });

  // >> Now you can do whatever you want with the entered code, But i added different states to show.

  // operator
  IsValid = !IsValid;

  // Valid 👍
  if (IsValid) {
    // Add timeout
    setTimeout(() => {
      // Remove loading
      CodeVerifiaction.classList.remove("loading");

      // add check to inputs
      inputs.forEach((input) => {
        input.classList.add("check");
      });
    }, 2000);

    // undo
    setTimeout(() => {
      // add check to inputs
      inputs.forEach((input) => {
        input.classList.remove("error");
        input.classList.remove("check");
      });
    }, 4000);
  }

  // Error 👎
  else {
    // Add timeout
    setTimeout(() => {
      // Remove loading
      CodeVerifiaction.classList.remove("loading");

      // add check to inputs
      inputs.forEach((input) => {
        input.classList.add("error");
      });
    }, 2000);

    // undo
    setTimeout(() => {
      // add check to inputs
      inputs.forEach((input) => {
        input.classList.remove("error");
        input.classList.remove("check");
      });
    }, 4000);
  }
}
```

## Contributing
 
 _Contributions are welcome!_

## Credits & Contact

**Creator**: Subhaan Yaghouti - Maintainer of the project.

**Contact**: If you have any questions or feedback, feel free to reach out via [yaghouti.1831@gmail.com](mailto:yaghouti.1831@gmail.com) or on Instagram [@subhaan_yaghouti](https://www.instagram.com/subhaan_yaghouti?igsh=bmE3ZTl1bGkwaW50).
