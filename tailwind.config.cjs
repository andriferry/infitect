module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Plus Jakarta Sans'],
      },
      colors: {
        basecolor: '#111E36',
        primarycolor: '#00dc96',
        secondarycolor: '#055FFC',
        black100color: '#151515'
      },
    },
  },
  plugins: [],
}
