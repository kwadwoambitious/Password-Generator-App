import { createGlobalStyle } from "styled-components";

// Create a global style component using styled-components
const GlobalStyle = createGlobalStyle`
  // Define a custom font-face
  @font-face {
    font-family: 'JetBrainsMono';
    src: url('/Password-Generator-App/fonts/static/JetBrainsMono-Bold.ttf') format('truetype');
    font-style: normal;
    font-display: swap;
  }

  // Apply global styles to the body element
  body {
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
    background-color: #08070B;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100svh; 
    font-family: 'JetBrainsMono', sans-serif;
    font-weight: bold;
  }
`;

// Export the global style component
export default GlobalStyle;
