export default function Validation(values) {
  const error = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const phone_pattern = /^\d{10}$/;

  if (values?.passwordExist) {
    if (values.password === "") {
      error.password = "* Password is required";
    } else if (!password_pattern.test(values.password)) {
      error.password =
        "* Password must contain at least 8 characters, one alphabet character, one digit, and one special character";
    }
  }

  if (values?.phoneExist) {
    if (values.phone === "") {
      error.phone = "* Phone Number Required";
    } else if (!phone_pattern.test(values.phone)) {
      error.phone = "* Invalid Phone Number";
    }
  }

  if (values?.otpExist) {
    if (values.otp === "") {
      error.otp = "* Otp Required";
    }
  }

  if (values?.confirmpasswordExist) {
    if (values.confirmpassword === "") {
      error.confirmpassword = "* Confirm Password Required";
    } else if (values.password !== values.confirmpassword) {
      error.confirmpassword = "* Passwords do not match";
    }
  }

  if (values?.nameExist) {
    if (values.name === "") {
      error.name = "* Name Required";
    }
  }

  if (values?.emailExist) {
    if (values.email === "") {
      error.email = "* Email id Required";
    } else if (!email_pattern.test(values.email)) {
      error.email = "* Email must include '@gmail.com'";
    }
  }
  return error;
}
