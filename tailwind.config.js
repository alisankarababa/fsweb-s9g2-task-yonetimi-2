/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        boxShadow: {
            "task" : "0 4px 5px 0 rgb(0 0 0 / 10%)",
            "task-btn" : "0 4px 5px 0 rgb(0 0 0 / 5%)",
        }
      },
    },
    plugins: [],
  }