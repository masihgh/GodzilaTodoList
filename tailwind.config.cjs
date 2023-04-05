module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"  
  ],
  daisyui: {
    themes: ['dark'],
  },
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
