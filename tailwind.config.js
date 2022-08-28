/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'sm':'340',
      'md':'840px',
      'lg':'550px',
      'tablet':'1250px',
      'desktop':'1550px'
      },
      fontsize :{
        'xs':'10px',
        'sm':'12px',
        'base':'14px',
        'lg':'16px'
      },

     extend: {
      colors:{
        'primary':'#f96a2b',
      'secondary':'#feebd7',
      'heading':'#404040',
      'color1':'#52525b',
      'color2':'#71717a',
      'color3':'#e4e4e7'
        },
        fontFamily:{
          poppins:["Poppins",'sans-serif']
        },
       
       },
    
},
  plugins: [],
}
