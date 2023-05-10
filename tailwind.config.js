/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors :{
      'sfteal':'#112B3C' ,
      'orange' : '#F66B0E' ,
      'sfblue' : '#205375' , 
      'grey'  : '#EFEFEF' ,
      'white'  : '#FFFFFF',
      'midblack' : '#424242' ,
      'bggray' : '#f1f1f1',
      'black' : '#000000',
      'transparent' : 'transparent',

    },
    container: {
      center: true,
      padding : '6rem'
    },
    extend: {},
  },
  plugins: [],
}

