/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				xd: { min: "888px" },
			},
			colors: {
				ddd: "#ddd",
				main: {
					100: "#c9c604",
					200: "#dedb02",
					300: "#fffc00",
				},
			},
		},
	},
	plugins: [],
};
