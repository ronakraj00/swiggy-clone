/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            keyframes: {
                shimmer: {
                    "0%": { transform: "translateX(-200%)" },
                    "100%": { transform: "translateX(200%)" },
                },
            },
            animation: {
                shimmer: "shimmer 1s infinite",
            },
            backgroundColor:{
              
            }
        },
    },
    plugins: [],
};
