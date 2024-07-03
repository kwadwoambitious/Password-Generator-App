// Define options for generating a password
type GeneratePasswordOptions = {
  length: number;              
  includeUppercase: boolean;   
  includeLowercase: boolean;  
  includeNumbers: boolean;     
  includeSymbols: boolean;     
};

// Character sets for generating passwords
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+[]{}|;:,.<>?/~`=-";

// Function to generate a password based on options
function generatePassword(options: GeneratePasswordOptions) {
  let allChars = "";  // Characters to pick from
  let password = "";  // Generated password
  let mandatoryChars = "";  // Characters to ensure each category is included

  // Add at least one character from each selected category
  if (options.includeUppercase) {
    allChars += UPPERCASE;
    mandatoryChars += getRandomChar(UPPERCASE);
  }
  if (options.includeLowercase) {
    allChars += LOWERCASE;
    mandatoryChars += getRandomChar(LOWERCASE);
  }
  if (options.includeNumbers) {
    allChars += NUMBERS;
    mandatoryChars += getRandomChar(NUMBERS);
  }
  if (options.includeSymbols) {
    allChars += SYMBOLS;
    mandatoryChars += getRandomChar(SYMBOLS);
  }

  // Check if length is sufficient to include all mandatory characters
  if (options.length < mandatoryChars.length) {
    throw new Error("Password length is too short to include all selected options");
  }

  // Add mandatory characters to password first
  password += mandatoryChars;

  // Fill the rest of the password length with random characters
  for (let i = password.length; i < options.length; i++) {
    password += getRandomChar(allChars);
  }

  // Shuffle the password to ensure randomness
  password = shuffleString(password);

  return password;
}

// Function to get a random character from a string
function getRandomChar(chars: string) {
  const randomIndex = Math.floor(Math.random() * chars.length);
  return chars[randomIndex];
}

// Function to shuffle a string
function shuffleString(str: string) {
  return str.split('').sort(() => Math.random() - 0.5).join('');
}

export { generatePassword }; 