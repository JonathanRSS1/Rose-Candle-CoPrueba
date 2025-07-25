// Libreria dotenv
import dotenv from "dotenv";

// Ejecuto "dotenv" para acceder al .env
dotenv.config();

export const config = {
  db: {
    URI: process.env.DB_URI,
  },
  server: {
    port: process.env.PORT,
  },
  JWT: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES,
  },
  ADMIN: {
    emailAdmin: process.env.ADMIN_EMAIL,
    passwordAdmin: process.env.ADMIN_PASSWORD,
  },
  email: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  },
  CLOUDINARY: {
    cloudinary_name: process.env.CLOUDINARY_NAME,
    cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
    cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
  },
  FRONTEND: {
    baseUrl: process.env.VITE_API_BASE_URL, // 👈 AÑADIDO
  },
};
