/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const primaryFont = '"Raleway",' + fontFamily.sans.join(",");
const primarySecondary = '"Open Sans",' + fontFamily.sans.join(",");
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "360px",
        md: "480px",
        lg: "720px",
        xl: "1024x",
        "2xl": "1340px",
      },
      container: {
        center: true,
        screens: {
          xl: "1024x",
          "2xl": "1440px",
        },
        padding: {
          DEFAULT: "1.5rem",
        },
      },
      fontFamily: {
        primary: ["'Raleway'", "sans-serif"],
        secondary: ["'Open Sans'", "sans-serif"],
      },
      screens: {
        "2hxl": "1400px",
      },
    },
    typography: {
      largerdesktop: {
        css: {
          h1: {
            fontFamily: primaryFont,
            fontSize: "64px",
            lineHeight: "110px",
            fontWeight: 600,
            letterSpacing: "-2px",
          },
          h2: {
            fontFamily: primaryFont,
            fontSize: "48px",
            lineHeight: "58px",
            fontWeight: 600,
          },
          h3: {
            fontFamily: primaryFont,
            fontSize: "36px",
            lineHeight: "44px",
            fontWeight: 600,
          },
          h4: {
            fontFamily: primaryFont,
            fontSize: "20px",
            lineHeight: "26px",
            fontWeight: 600,
          },
          h5: {
            fontFamily: primaryFont,
            fontSize: "18px",
            lineHeight: "20px",
            fontWeight: 600,
          },
          h6: {
            fontFamily: primaryFont,
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: 600,
          },
          p: {
            fontFamily: primaryFont,
            fontSize: "16px",
            lineHeight: "30px",
            fontWeight: 400,
          }
        },
      },
      desktop: {
        css: {
          h1: {
            fontFamily: primaryFont,
            fontSize: "64px",
            lineHeight: "110px",
            fontWeight: 600,
            letterSpacing: "-2px",
          },
          h2: {
            fontFamily: primaryFont,
            fontSize: "48px",
            lineHeight: "58px",
            fontWeight: 600,
          },
          h3: {
            fontFamily: primaryFont,
            fontSize: "36px",
            lineHeight: "44px",
            fontWeight: 600,
          },
          h4: {
            fontFamily: primaryFont,
            fontSize: "20px",
            lineHeight: "26px",
            fontWeight: 600,
          },
          h5: {
            fontFamily: primaryFont,
            fontSize: "18px",
            lineHeight: "20px",
            fontWeight: 600,
          },
          h6: {
            fontFamily: primaryFont,
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: 600,
          },
          p: {
            fontFamily: primaryFont,
            fontSize: "16px",
            lineHeight: "30px",
            fontWeight: 400,
          }
        },
      },
      tablet: {
        css: {
          h1: {
            fontFamily: primaryFont,
            fontSize: "48px",
            lineHeight: "58px",
            fontWeight: 600,
            letterSpacing: "-1px",
          },
          h2: {
            fontFamily: primaryFont,
            fontSize: "36px",
            lineHeight: "44px",
            fontWeight: 600,
          },
          h3: {
            fontFamily: primaryFont,
            fontSize: "24px",
            lineHeight: "32px",
            fontWeight: 600,
          },
          h4: {
            fontFamily: primaryFont,
            fontSize: "20px",
            lineHeight: "26px",
            fontWeight: 600,
          },
          h5: {
            fontFamily: primaryFont,
            fontSize: "16px",
            lineHeight: "22px",
            fontWeight: 600,
          },
          h6: {
            fontFamily: primaryFont,
            fontSize: "14px",
            lineHeight: "18px",
            fontWeight: 600,
          },
          p: {
            fontFamily: primaryFont,
            fontSize: "14px",
            lineHeight: "26px",
            fontWeight: 400,
          },
        },
      },
      DEFAULT: {
        css: {
          h1: {
            fontFamily: primaryFont,
            fontSize: "36px",
            lineHeight: "44px",
            fontWeight: 600,
            letterSpacing: "-1px",
          },
          h2: {
            fontFamily: primaryFont,
            fontSize: "24px",
            lineHeight: "32px",
            fontWeight: 600,
          },
          h3: {
            fontFamily: primaryFont,
            fontSize: "20px",
            lineHeight: "26px",
            fontWeight: 600,
          },
          h4: {
            fontFamily: primaryFont,
            fontSize: "18px",
            lineHeight: "24px",
            fontWeight: 600,
          },
          h5: {
            fontFamily: primaryFont,
            fontSize: "16px",
            lineHeight: "22px",
            fontWeight: 600,
          },
          h6: {
            fontFamily: primaryFont,
            fontSize: "14px",
            lineHeight: "18px",
            fontWeight: 600,
          },
          p: {
            fontFamily: primaryFont,
            fontSize: "12px",
            lineHeight: "26px",
            fontWeight: 400,
          },
        },
      },
      
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
