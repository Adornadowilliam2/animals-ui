// configuration.js

// Detect if running in production (Vercel)
const isProduction = process.env.NODE_ENV === "production";

// Base URL depending on environment
export const url = isProduction
  ? "https://animals-ui.vercel.app/api" // <-- replace with your Vercel project URL
  : "http://localhost:3000/api";