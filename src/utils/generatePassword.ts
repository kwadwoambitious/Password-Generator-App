type GeneratePasswordOptions = {
  length: number
  includeUppercase: boolean
  includeLowercase: boolean
  includeNumbers: boolean
  includeSymbols: boolean
}
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?/~`=-"

function generatePassword({length,includeUppercase,includeLowercase,includeNumbers,includeSymbols}: GeneratePasswordOptions) {
let chars = ''
if(includeUppercase) chars += uppercase
if(includeLowercase) chars += lowercase
if(includeNumbers) chars += numbers
if(includeSymbols) chars += symbols

let password = "";
for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * chars.length);
  password += chars[randomIndex];
}

return password;

}

export { generatePassword };