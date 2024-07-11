# Random Password Generator

This is a simple yet secure random password generator application built with HTML, CSS, and JavaScript. It allows users to generate strong, customizable passwords for enhanced online security.

## Features

- **Adjustable Password Length:** Use the slider to choose a password length between 8 and 30 characters.
- **Guaranteed Character Variety:**  Each generated password includes at least one uppercase letter, one lowercase letter, one number, and one special symbol to meet common password complexity requirements.
- **Copy to Clipboard:**  Easily copy the generated password to your clipboard with a single click on the copy icon.
- **Responsive Design:** The application is designed to work well on various screen sizes, making it accessible on desktop and mobile devices.
- **Modern Design:**  The app has a sleek, modern design with a dark theme and intuitive user interface.

## How to Use

1. **Clone or download:**  Get a copy of this repository on your local machine.
2. **Open `index.html`:** Open the `index.html` file in your web browser.
3. **Adjust the slider:** Move the slider to select your desired password length.
4. **Generate:** Click the "Generate Password" button to create a new password.
5. **Copy:** Click the copy icon to copy the password to your clipboard.

## Technologies Used

- **HTML:** For structuring the web page.
- **CSS:** For styling and visual presentation.
- **JavaScript:** For generating random passwords, handling user interactions, and copying to the clipboard.

## Security Considerations

- **Client-Side Generation:** Passwords are generated entirely on the client-side (in your browser), meaning they are never sent to a server, enhancing privacy.
- **Cryptographic Randomness:** The password generation process uses JavaScript's built-in random number generator, which is considered secure for most purposes. However, for extremely high-security applications, you might consider using a more robust random number source.

## Customization

Feel free to customize the CSS styles to match your preferences. You can also modify the character sets (`upperCase`, `lowerCase`, `number`, `symbols`) in the JavaScript code if you want to further tailor the character options.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.


