module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "scale-up-center": {
          "0%": {
            "-webkit-transform": "scale(0.5)",
            transform: "scale(0.5)"
          },
          "100%": {
            "-webkit-transform": "scale(1)",
            transform: "scale(1)"
          }
        },
        "slide-right": {
          "0%": {
            "-webkit-transform": "translateX(-50px)",
            transform: "translateX(-50px)"
          },
          "100%": {
            "-webkit-transform": "translateX(0)",
            transform: "translateX(0)"
          }
        }
      },
      animation: {
        "scale-up-center": "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "slide-right": "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
      }
    }
  },
  plugins: []
};