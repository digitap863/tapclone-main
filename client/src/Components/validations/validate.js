export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  export function validateName(name) {
    // Name should contain only letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  }
  export function validateMobileNumber(mobileNumber) {
    // Mobile number should contain only digits and be 10 digits long
    const mobileNumberRegex = /^\d{10}$/;
    return mobileNumberRegex.test(mobileNumber);
  }
  