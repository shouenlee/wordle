// RSA encryption/decryption utilities
// Using small prime numbers for demonstration
const p = 17; // prime number 1
const q = 19; // prime number 2
const n = p * q; // modulus
const e = 7; // public key
const d = 103; // private key (calculated using extended Euclidean algorithm)

// Convert string to number array
function stringToNumbers(str: string): number[] {
  return str.split('').map(char => char.charCodeAt(0));
}

// Convert number array to string
function numbersToString(nums: number[]): string {
  return nums.map(num => String.fromCharCode(num)).join('');
}

// Modular exponentiation
function modPow(base: number, exponent: number, modulus: number): number {
  if (modulus === 1) return 0;
  let result = 1;
  base = base % modulus;
  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result = (result * base) % modulus;
    }
    base = (base * base) % modulus;
    exponent = Math.floor(exponent / 2);
  }
  return result;
}

// Encrypt a string using RSA public key
export function encrypt(str: string): string {
  const numbers = stringToNumbers(str);
  const encrypted = numbers.map(num => modPow(num, e, n));
  return encrypted.join(',');
}

// Decrypt a string using RSA private key
export function decrypt(str: string): string {
  const numbers = str.split(',').map(num => parseInt(num));
  const decrypted = numbers.map(num => modPow(num, d, n));
  return numbersToString(decrypted);
} 