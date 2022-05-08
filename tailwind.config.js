module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      title: ["Herr Von Muellerhoff"],
      display: ["Fira Sans"],
      headers: ["Noticia Text"],
      body: ["Telex"],
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "14rem",
      },
    },
    extend: {
      scale: {
        '102': '1.02',
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "Fira Sans",
            h1: {
              fontFamily: "Fira Sans",
              color: "var(--color-accent)"
            },
            h2: {
              fontFamily: "Noticia Text",
              color: "var(--color-accent)"
            },
            h3: {
              fontFamily: "Noticia Text",
              color: "var(--color-text-secondary)"
            },
            h4: {
              fontFamily: "Noticia Text",
              color: "var(--color-text-secondary)"
            },
            p: {
              fontFamily: "Telex",
              color: "var(--color-text-body)"
            },
            li: {
              fontFamily: "Telex",
              color: "var(--color-text-body)"
            },
            a: {
              fontFamily: "Telex",
              color: "var(--color-text-body)"
            },
          },
        },
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        accent: "var(--color-accent)",
        nav: "var(--color-bg-nav)"
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        body: "var(--color-text-body)",
        accent: "var(--color-accent)",
        dark: "var(--color-text-dark)",
        nav: "var(--color-text-nav)"
      },
      borderColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        body: "var(--color-text-body)",
        accent: "var(--color-accent)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
