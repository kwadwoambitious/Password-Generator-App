  

# Password Generator App

  

## Overview

  

The Password Generator App is a web application that allows users to create secure and customizable passwords based on selected criteria. The app also provides a visual representation of password strength and includes features for copying generated passwords to the clipboard.

  
  

## Features

  

1.  **Generate Passwords:** Create passwords based on selected criteria such as length, inclusion of uppercase letters, lowercase letters, numbers, and symbols.

2.  **Copy to Clipboard:** Easily copy the generated password to your clipboard with a single click.

3.  **Password Strength Indicator:** Visualize the strength of the generated password with an intuitive indicator.

4.  **Responsive Design:** The app is fully responsive, ensuring a seamless experience on both desktop and mobile devices.

5.  **Interactive States:** Interactive hover and focus states enhance user experience.

  
  

## Tech Stack

  

1.  **React:** A JavaScript library for building user interfaces.

2.  **Vite:** A build tool that provides a fast development experience.

3.  **TypeScript:** A typed superset of JavaScript that adds static types.

4.  **Styled-components:** A library for styling React components using tagged template literals.

5.  **react-copy-to-clipboard:** A React component for copying text to the clipboard.

6.  **react-toastify:** A library for displaying notifications and error messages in React applications.

  
  

## Installation and Setup

  

Follow these steps to set up the project locally:

  

## 1. Clone the repository:

  

git clone https://github.com/kwadwoambitious/Password-Generator-App.git

cd "PASSWORD GENERATOR APP"

  

## 2. Install dependencies:

  

npm install

  

## 3. Start the development server:

  

npm run dev

  

## 4. Build the app for production:

  

npm run build

  

## 5. Preview the production build:

  

npm run preview

  
  

## Usage

  

1.  **Select Criteria:** Use the range input to set the password length and the checkboxes to choose criteria such as the inclusion of uppercase letters, lowercase letters, numbers, and symbols.

2.  **Generate Password:** Click the "Generate" button to create a password based on your selected criteria.

3.  **View Strength:** Check the password strength indicator to see the strength of the generated password.

4.  **Copy Password:** Click the "Copy" icon to copy the generated password to your clipboard.

  

## Common Errors and Troubleshooting

**Error:** Password: minimum 4 characters and 1 checkbox.

  

-  **Solution:** Ensure that you have selected at least one criterion (uppercase letters, lowercase letters, numbers, or symbols) and specified a password length of at least 4.

  

**Error:** There is no password to copy!

  

-  **Solution:** Ensure that you have generated a password before clicking on the copy icon.

  
  

## File Structure

  

Here's an overview of the project's file structure:

  
```
PASSWORD GENERATOR APP/

├── fonts/

│ └── static/

│ ├── JetBrainsMono-Bold.ttf

│ ├── JetBrainsMono-BoldItalic.ttf

├── src/

│ ├── components/

│ │ ├── IncludeUppercase.tsx

│ │ ├── IncludeLowercase.tsx

│ │ ├── IncludeNumbers.tsx

│ │ ├── IncludeSymbols.tsx

│ │ ├── PasswordLength.tsx

│ │ └── PasswordStrengthIndicator.tsx

│ ├── globalStyles.ts

│ ├── utils/

│ │ ├── generatePassword.ts

│ │ └── ...

│ ├── App.tsx

│ ├── main.tsx

│ └── ...

├── .gitignore

├── README.md

├── index.html

├── package.json

├── tsconfig.json

└── vite.config.ts

  ```
  

## Contributing

  

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please create an issue or submit a pull request.

  
  

## License

  

This project is currently not licensed. If you intend to distribute or modify this project, please consider adding an appropriate license.

  
  

## Contact

  

For any questions or feedback, please reach out to me at [antwiebenezer784@gmail.com].
