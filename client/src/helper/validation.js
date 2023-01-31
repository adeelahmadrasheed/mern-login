import toast from "react-hot-toast";

/* 
========================================= 
INCLUDES ALL THE FORMS VALIDATIONS
========================================= 
 */

// /** validate login page username */
// export async function usernameValidate(values){
//     const errors = usernameVerify({}, values);

//     if(values.username){
//         // check user exist or not
//         const { status } = await authenticate(values.username);
        
//         if(status !== 200){
//             errors.exist = toast.error('User does not exist...!')
//         }
//     }

//     return errors;
// }

// /** validate username */
// function usernameVerify(error = {}, values){
//     if(!values.username){
//         error.username = toast.error('Username Required...!');
//     }else if(values.username.includes(" ")){
//         error.username = toast.error('Invalid Username...!')
//     }

//     return error;
// }

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
  if(values.username){
    console.log(`${values.username}`)
  }

  return errors;
}

/* 
========================================= 
VERIFY PASSOWRD
========================================= 
 */
export async function passwordVerify(errors = {}, values) {
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/ // eslint-disable-next-line
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

// ========================================= //
