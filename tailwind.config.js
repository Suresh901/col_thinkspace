/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient': `linear-gradient(
          90deg,
          #f55f5f 0%,
          #e39c4a 13.4%,
          #b8d154 26.4%,
          #5ed9ad 38.4%,
          #58bac7 53.4%,
          #4a57d0 63.9%,
          #825ab5 74.9%,
          #d55c9d 88.4%,
          #d94b4b 100%
        )`,
      },
      screens: {
				"max-2xl": { max: "1535px" },
				"max-xl": { max: "1279px" },
				"max-2lg": { max: '1300px' },
				"max-lg": { max: "1024px" },
				"max-md": { max: "767px" },
				"max-sm": { max: "639px" },
				"max-xs": { max: "425px" },
				"max-2xs": { max: "320px" },
			},
    },
  },
  plugins: [],
}