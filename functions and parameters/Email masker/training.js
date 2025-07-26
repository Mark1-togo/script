/*
javaScript functions
Using asterisk to mask the middle part of an email address 
johndoe1@example.com 
j******1@example.com
*/
function maskedEmail(mail) {
  let atIndex = mail.indexOf("@");

  const localPart = mail.slice(0, atIndex);
  const domainPart = mail.slice(atIndex);

  // eg@example.com   **@example.com
  if (localPart.length <= 2) {
    return localPart[0] + "*".repeat(localPart.length - 1) + domainPart;
  }

  const maskedPart =
    localPart[0] +
    "*".repeat(localPart.length - 2) +
    localPart[localPart.length - 1];
  return maskedPart + domainPart;
}

let mail = "johndoe1@example.com";
console.log(maskedEmail(mail));
console.log(maskedEmail("steve2@example.com"));
