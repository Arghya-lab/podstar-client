/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ["PT Sans", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    typography: {
      css: {
        "--tw-prose-body": "hsl(var(--background))",
        "--tw-prose-headings": "hsl(var(--foreground))",
        "--tw-prose-lead": "hsl(var(--foreground))",
        "--tw-prose-links": "hsl(var(--link))",
        "--tw-prose-bold": "hsl(var(--primary))",
        "--tw-prose-counters": "hsl(var(--foreground))",
        "--tw-prose-bullets": "hsl(var(--foreground))",
        "--tw-prose-hr": "hsl(var(--border))",
        "--tw-prose-quotes": "hsl(var(--foreground))",
        "--tw-prose-quote-borders": "hsl(var(--border))",
        "--tw-prose-captions": "hsl(var(--foreground))",
        "--tw-prose-kbd": "hsl(var(--primary))",
        "--tw-prose-kbd-shadows": "hsl(var(--ring))",
        "--tw-prose-code": "hsl(var(--primary))",
        "--tw-prose-pre-code": "hsl(var(--secondary))",
        "--tw-prose-pre-bg": "hsla(var(--secondary), 0.5)",
        "--tw-prose-th-borders": "hsl(var(--border))",
        "--tw-prose-td-borders": "hsl(var(--border))",
        "--tw-prose-invert-body": "hsl(var(--foreground))",
        "--tw-prose-invert-headings": "hsl(var(--background))",
        "--tw-prose-invert-lead": "hsl(var(--muted))",
        "--tw-prose-invert-links": "hsl(var(--link))",
        "--tw-prose-invert-bold": "hsl(var(--primary))",
        "--tw-prose-invert-counters": "hsl(var(--muted))",
        "--tw-prose-invert-bullets": "hsl(var(--secondary))",
        "--tw-prose-invert-hr": "hsl(var(--secondary))",
        "--tw-prose-invert-quotes": "hsl(var(--background))",
        "--tw-prose-invert-quote-borders": "hsl(var(--secondary))",
        "--tw-prose-invert-captions": "hsl(var(--muted))",
        "--tw-prose-invert-kbd": "hsl(var(--primary))",
        "--tw-prose-invert-kbd-shadows": "hsl(var(--foreground))",
        "--tw-prose-invert-code": "hsl(var(--primary))",
        "--tw-prose-invert-pre-code": "hsl(var(--secondary))",
        "--tw-prose-invert-pre-bg": "hsla(var(--secondary), 0.5)",
        "--tw-prose-invert-th-borders": "hsl(var(--secondary))",
        "--tw-prose-invert-td-borders": "hsl(var(--secondary))",
      },
    },
    extend: {
      screens: {
        xs: "426px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        link: {
          DEFAULT: "hsl(var(--link))",
          hover: "hsl(var(--link-hover))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
