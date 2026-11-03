/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-error": "#ffffff",
        "tertiary-fixed-dim": "#feb956",
        "primary": "#b22156",
        "outline": "#8c7075",
        "error-container": "#ffdad6",
        "on-tertiary-fixed-variant": "#633f00",
        "surface-bright": "#fff8f6",
        "on-surface-variant": "#584145",
        "on-secondary-container": "#006f69",
        "outline-variant": "#dfbec4",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "surface-container-low": "#fff1ec",
        "secondary-container": "#79f3ea",
        "surface-dim": "#f6d2c5",
        "on-secondary-fixed-variant": "#00504c",
        "surface-container": "#ffe9e2",
        "on-error-container": "#93000a",
        "secondary-fixed": "#7cf6ec",
        "on-tertiary": "#ffffff",
        "primary-fixed": "#ffd9df",
        "background": "#fff8f6",
        "tertiary": "#835500",
        "on-tertiary-fixed": "#291800",
        "inverse-on-surface": "#ffede7",
        "surface": "#fff8f6",
        "secondary": "#006a65",
        "on-background": "#2a170f",
        "surface-container-high": "#ffe2d8",
        "surface-tint": "#b22156",
        "on-tertiary-container": "#442a00",
        "on-secondary-fixed": "#00201e",
        "on-primary-fixed-variant": "#8f003f",
        "primary-container": "#ff5e8e",
        "inverse-surface": "#412b22",
        "surface-container-highest": "#ffdbcd",
        "tertiary-fixed": "#ffddb4",
        "on-primary-fixed": "#3f0018",
        "inverse-primary": "#ffb1c1",
        "on-primary-container": "#65002a",
        "error": "#ba1a1a",
        "surface-container-lowest": "#ffffff",
        "surface-variant": "#ffdbcd",
        "secondary-fixed-dim": "#5dd9d0",
        "on-surface": "#2a170f",
        "primary-fixed-dim": "#ffb1c1",
        "tertiary-container": "#c98b2b"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      spacing: {
        "space-lg": "1.5rem",
        "space-md": "1rem",
        "gutter-sm": "1rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-xl": "2.5rem",
        "gutter": "1.5rem",
        "margin": "2rem",
        "margin-sm": "1rem"
      },
      fontFamily: {
        "headline-md": ["Outfit", "sans-serif"],
        "label-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-sm": ["Outfit", "sans-serif"],
        "display-lg": ["Outfit", "sans-serif"],
        "headline-xl-mobile": ["Outfit", "sans-serif"],
        "title-md": ["Plus Jakarta Sans", "sans-serif"],
        "label-sm": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "display-lg-mobile": ["Outfit", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-xl": ["Outfit", "sans-serif"],
        "headline-lg": ["Outfit", "sans-serif"],
        "label-md": ["Plus Jakarta Sans", "sans-serif"],
        "body-sm": ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "label-lg": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
        "headline-sm": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
        "display-lg": ["56px", { "lineHeight": "64px", "letterSpacing": "-0.03em", "fontWeight": "700" }],
        "headline-xl-mobile": ["30px", { "lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "title-md": ["18px", { "lineHeight": "26px", "fontWeight": "600" }],
        "label-sm": ["11px", { "lineHeight": "14px", "letterSpacing": "0.04em", "fontWeight": "700" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "display-lg-mobile": ["38px", { "lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "label-md": ["12px", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "600" }],
        "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }]
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite'
      }
    }
  },
  plugins: [],
}

