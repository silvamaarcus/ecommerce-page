import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-orange": "hsl(26, 100%, 55%)",
        "primary-pale-orange": "hsl(25, 100%, 94%)",
        "neutral-dark-blue": "hsl(220, 13%, 13%)",
        "neutral-dark-graysh-blue": "hsl(219, 9%, 45%)",
        "neutral-graysh-blue": "hsl(220, 14%, 75%)",
        "neutral-light-graysh-blue": "hsl(223, 64%, 98%)",
        "neutral-white": "hsl(0, 0%, 100%)",
        "neutral-dark": "hsl(0, 0%, 0%, .75)",
      },
    },
  },
  plugins: [],
};
export default config;
