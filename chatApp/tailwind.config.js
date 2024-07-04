/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary_Color: "#5F35F5",
                primary_cont_color: "#11175D",
                Extra_cont_color: "#03014C",
                secondary_cont_color: "rgba(3, 1, 76, 0.5)",
                secondary70_cont_color: "rgba(17, 23, 93, 0.7)",
                secondary30_cont_color: "rgba(17, 23, 93, 0.3)",
                yellow_color: "#EA6C00",
                icon_color: "rgba(255, 255, 255, 0.7)",
            },
            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
                openSans: ["Open Sans", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};