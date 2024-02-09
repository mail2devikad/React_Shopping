export default function Loginvalidation(values) {
  const error = {};

  const phone_pattern = /^\d{10}$/;
  const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (values.phone === "") {
    error.phone = "* Phone Number Required";
  } else if (!phone_pattern.test(values.phone)) {
    error.phone = "* Invalid Phone Number";
  }

  if (values.password === "") {
    error.password = "* Password is required";
  } else if (!password_pattern.test(values.password)) {
    error.password = "* Password must contain at least 8 characters, one alphabet character, one digit, and one special character";
  }
  


  return error;
}
