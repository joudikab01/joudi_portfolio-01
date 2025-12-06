export const COLORS = {
  primary: {
    cyan: "#00a1e6",
    cyanDark: "#0088cc",
    violet: "#9333ea",
    violetDark: "#7c3aed",
  },
  text: {
    primary: "#1a202c",
    secondary: "#4a5568",
    muted: "#718096",
  },
  background: {
    white: "#ffffff",
    lightGray: "#f8f9fa",
    lightCyan: "#e0f7ff",
    lightViolet: "#f3e8ff",
  },
  border: {
    light: "#e0e0e0",
  },
} as const;

export const GRADIENTS = {
  primary: "linear-gradient(45deg, #0088cc, #9333ea)",
  cyanBlue: { from: "cyan", to: "blue", deg: 45 },
  violetGrape: { from: "violet", to: "grape", deg: 45 },
  background: {
    main: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
    experience:
      "linear-gradient(135deg, #f8f9fa 0%, #e0f7ff 50%, #f3e8ff 100%)",
    card: "linear-gradient(135deg, #e0f7ff 0%, #f3e8ff 100%)",
  },
} as const;

export type ColorType = "cyan" | "violet";

export const getAlternatingColor = (index: number): ColorType =>
  index % 2 === 0 ? "cyan" : "violet";

export const getAlternatingColorReverse = (index: number): ColorType =>
  index % 2 === 0 ? "violet" : "cyan";
