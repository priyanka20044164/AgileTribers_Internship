function isStrongPassword(password) {
    const minLength = password.length >= 8;
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecial = /[^a-zA-Z0-9]/.test(password);

    if (minLength && hasLower && hasUpper && hasDigit && hasSpecial) {
        return "Strong Password";
    }
    return "Weak Password";
}

// Example
console.log(isStrongPassword("Strong@123")); // Strong Password
console.log(isStrongPassword("weakpass"));   // Weak Password
