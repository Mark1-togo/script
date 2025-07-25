function maskEmail(email) {
  // Find the position of '@'
  const atIndex = email.indexOf("@");

  // Get the local part (before '@') and the domain part (after '@')
  const localPart = email.slice(0, atIndex);
  const domainPart = email.slice(atIndex);

  // Mask the local part (first letter + * + last letter)

  if (localPart.length <= 2) {
    // If local part is 2 or less, mask all between first and last char
    return localPart[0] + "*".repeat(localPart.length - 1) + domainPart;
  }
  const maskedLocal =
    localPart[0] +
    "*".repeat(localPart.length - 2) +
    localPart[localPart.length - 1];

  // Return the masked email
  return maskedLocal + domainPart;
}

//Example usage:
let email = "apple.pie@example.com";
console.log(maskEmail(email)); // "a*******e@example.com"
