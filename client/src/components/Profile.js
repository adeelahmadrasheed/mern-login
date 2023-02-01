import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import extend from "../styles/Profile.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import convertToBase64 from "../helper/convert";
import { registerValidation } from "../helper/validation";

// import { Register } from "../helper/validation";
/* // **

 import modules above this line ** // */

const Profile = () => {
  // state management
  const [file, setfile] = useState();

  const formik = useFormik({
    initialValues: {
      Fname: '',
      lname: '',
      email: "",
      username: "",
      password: "",
      mobile: '',
      address: '',
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, {
        profile: file || "",
      });
      console.log(values);
    },
  });

  // formik doesn't support file upload (to handle exception need to create a function)
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setfile(base64);
  };
  return (
    <div className='container mx-auto'>
      <Toaster position='top-center' reverseOrder='false'></Toaster>
      <div className='flex justify-center items-center h-screen'>
        <div
          className={styles.glass}
          style={{ width: "50%", paddingTop: "3em", height: "90%" }}>
          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'>Profile</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              User Profile Details
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <label htmlFor='profile'>
                <img
                  className={`${styles.profile_img} ${extend.profile_img}`}
                  src={file || avatar}
                  alt='avatar'></img>
              </label>
              <input
                onChange={onUpload}
                type='file'
                id='profile'
                name='profile'></input>
            </div>
            <div className='textbox flex flex-col items-center gap-6'>
              <div className='name flex w-3/4 gap-10'>
                <input
                  {...formik.getFieldProps("Fname")}
                  className={`${styles.textbox}  ${extend.textbox}`}
                  type='text'
                  placeholder='First Name'
                />
                <input
                  {...formik.getFieldProps("Lname")}
                  className={`${styles.textbox}  ${extend.textbox}`}
                  type='text'
                  placeholder='Last Name*'
                />
              </div>
              <div className='name flex w-3/4 gap-10'>
                <input
                  {...formik.getFieldProps("username")}
                  className={`${styles.textbox}  ${extend.textbox}`}
                  type='text'
                  placeholder='Username*'
                />
                <input
                  {...formik.getFieldProps("email")}
                  className={`${styles.textbox}  ${extend.textbox}`}
                  type='text'
                  placeholder='Email*'
                />
              </div>
              <div className='name flex w-3/4 gap-10'>
                <input
                  {...formik.getFieldProps("mobile")}
                  className={`${styles.textbox}  ${extend.textbox}`}
                  type='text'
                  placeholder='Mobile'
                />
                <input
                  {...formik.getFieldProps("address")}
                  className={styles.textbox}
                  type='text'
                  placeholder='Address'
                />
              </div>

              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type='password'
                placeholder='Password*'
              />
              <button className={styles.btn} type='submit'>
                Update
              </button>
            </div>

            <div className='text-center py-4'>
              <span>
                Need to come back later?
                <Link className='text-red-500' to='/'>
                  Logout
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
