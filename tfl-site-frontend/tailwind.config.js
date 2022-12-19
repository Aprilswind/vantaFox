/** @type {import('tailwindcss').Config} */
module.exports = {
 darkMode: 'class',
 content: [
   "./pages/**/*.{js,ts,jsx,tsx}",
   "./components/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
   extend: {
    backgroundColor: {
     'main': '#181818',
     'darker': '#161616',
     'vanta': "#db4642"
    },
    textColor: {
     'vanta': "#db4642"
    },
    colors: {
     'vanta': "#db4642"
    },
    fontFamily: {
     'poppins': ['Poppins', 'sans-serif'],
     'bakback': ['Bakbak One', 'cursive']
   },
   },
 },
 plugins: [],
}