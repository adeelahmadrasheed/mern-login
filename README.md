# mern-login
MERN Login System (OTP, JWT, Auth, Reset)

# setting up client
mkdir client
cd client
npx create-react-app .

# adding tailwind css
npm install -D tailwindcss
npx tailwindcss init

# adding formik and react-hot-toast
npm install formik react-hot-toast


<!-- Add the paths to all of your template files in your tailwind.config.js file. -->
<!-- /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ -->
    "./src/**/*.{js,jsx,ts,tsx}",
  <!-- ],
  theme: {
    extend: {},
  },
  plugins: [],
} -->

<!-- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file. -->
@tailwind base;
@tailwind components;
@tailwind utilities;




# setting up server
mkdir server
cd server
