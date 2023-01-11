function validatePassword(password) {
  if (password.length > 7) {
    return "Strong";
  } else {
    return "Weak";
  }
}

function validatePassword(password) {
  return password.length > 7 ? "Strong" : "Weak";
}

function validatePassword(password) {
  return password.length > 7 && "Strong" || "Weak";
}

function validatePassword(password) {
  if (password.length > 7 && /[A-Z]/.test(password)) {
  return "Very Strong";
} else if (password.length === 7) {
  return "Strong";
} else {
  return "Weak";
}
}
// }
// validatePassword("MIssugk@5232");
// validatePassword("MIssugk@5232");
// validatePassword("MIssugk@5232");
// validatePassword("MIssugk@5232");