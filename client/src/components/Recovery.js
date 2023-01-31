import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
// import { recoveryValidate } from "../helper/validation";

/* // **

 import modules above this line ** // */

const Recovery = () => {
  const formik = useFormik({
    initialValues: {
      recovery: "",
    },
    validate: 'recoveryValidate',
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className='container mx-auto'>
      <Toaster position='top-center' reverseOrder='false'></Toaster>
      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>
          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'>Password Recovery</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter OTP to recover password
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <img
                className={styles.profile_img}
                src={avatar}
                alt='avatar'></img>
            </div>

            <div className='textbox flex flex-col items-center gap-6'>
              <input
                {...formik.getFieldProps("recovery")}
                className={styles.textbox}
                type='text'
                placeholder='Recovery'
              />
              <button className={styles.btn} type='submit'>
                Login
              </button>
            </div>

            <div className='text-center py-4'>
              <span>
                Forgot Password?{" "}
                <Link className='text-red-500' to='/recovery'>
                  Recover Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
