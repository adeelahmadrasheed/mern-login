import toast from "react-hot-toast";

/* 
========================================= 
========================================= 
INCLUDES ALL THE FORMS VALIDATIONS
========================================= 
========================================= 
 */
/* 
========================================= 
VALIDATE PROFILE
========================================= 
 */

export async function profileValidation(values) {
  const errors = emailVerify({}, values);
  return errors;
}

/* 
========================================= 
VALIDATE REGISTER FORM
========================================= 
 */

export async function registerValidation(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}

/* 
========================================= 
VALIDATE EMAIL
========================================= 
 */
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email Required");
  } else if (values.email.includes(" ")) {
    error.email = toast.email = toast.error("Incorrect Email");
  } else if (!/^[A-Z0-9._%%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid Email");
  }
  return error;
}
/* 
========================================= 
VERIFY USERNAME
========================================= 
 */

function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username");
  }

  return error;
}
/* 
========================================= 
USERNAME EXCEPTION
========================================= 
 */
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);
  if (values.username) {
    console.log(`${values.username}`);
  }

  return errors;
}

/* 
========================================= 
VERIFY PASSOWRD
========================================= 
 */
export async function passwordVerify(errors = {}, values) {
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; // eslint-disable-next-line
  if (!values.password) {
    errors.password = toast.error("Password Required");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Incorrect Password");
  } else if (values.password.length < 4) {
    errors.password = toast.error(
      "Password must be more than 4 characters long."
    );
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error(
      "Password must include atleast 1 special character."
    );
  }

  return errors;
}
/*
========================================= 
PASSWORD EXCEPTION
========================================= 
 */
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
}

/* 
========================================= 
VALIDATE RESET PASSWORD
========================================= 
 */
export async function resetPasswordValidation(values) {
  const errors = passwordVerify({}, values);
  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error("Password does not match");
  }
  return errors;
}
/*
// ========================================= 
// PASSWORD EXCEPTION
// ========================================= 
//  */
// export async function passwordValidate(values) {
//   const errors = passwordVerify({}, values);

//   return errors;
// }

// ========================================= //
