const colors = {
  brand: {
    primary: "#31A05F",
    secondary: "#C7FFD7",
  },
  gray: {
    background: "#F2F2F2",
    surface: "#FFFFFF",
    textPrimary: "#333333",
    textOnPrimary: "#FFFFFF",
    lightGray: "#E0E0E0",
    mediumGray: "#B1B8C0",
    darkGray: "#707682",
    darkerGray: "#54555A",
  },
  etc: {
    green: "#31A05F",
    red: "#FA5959",
    yellow: "#FFA900",
    pastelOrange: "#FFF6E5",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    "after:pb-[50%]",
    "after:pb-[75%]",
    "after:pb-[100%]",
    "max-w-[none]",
    "max-h-[none]",
    "max-w-full",
    "max-h-full",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "1024px",
      lg: "1440px",
    },
    fontFamily: {
      sans: ["Pretendard", "Pretendard Variable"],
    },
    fontSize: {
      "48/h1": ["48px", { fontWeight: 800, lineHeight: "100%" }],
      "30/h2": ["30px", { fontWeight: 600, lineHeight: "120%" }],
      "24/h3": ["24px", { fontWeight: 600, lineHeight: "130%" }],
      "20/h4": ["20px", { fontWeight: 600, lineHeight: "140%" }],
      "16/p": ["16px", { fontWeight: 400, lineHeight: "175%" }],
      "16/blockquote": ["16px", { fontWeight: 400, lineHeight: "150%", fontStyle: "italic" }],
      "20/lead": ["20px", { fontWeight: 400, lineHeight: "140%" }],
      "18/large": ["18px", { fontWeight: 600, lineHeight: "150%" }],
      "14/small": ["14px", { fontWeight: 500, lineHeight: "100%" }],
      "14/subtle": ["14px", { fontWeight: 400, lineHeight: "140%" }],
    },
    extend: {
      boxShadow: {
        toggle: "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 3px 1px 0px rgba(0, 0, 0, 0.05)",
      },
      colors: {
        ...colors,
        theme: {
          white: colors.gray.surface,
          primary: colors.brand.primary,
          secondary: colors.brand.secondary,
        },
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(180deg, #31A05F 0%, #93E5AB 100%)",
        "gradient-2": "linear-gradient(180deg, #31A05F 0%, rgba(93, 226, 148, 0.03) 100%)",
      },
      transitionProperty: {
        opacity: "opacity",
      },
      transitionDuration: {
        500: "300ms",
      },
    },
  },
};
